import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { fetchGithubMembers } from "../api/github-members-list.api";
import { MemberEntity } from "../../../core/model/member-entity";

const columns = [
  { id: "avatar_url", label: "Avatar", minWidth: 170 },
  { id: "id", label: "Id", minWidth: 170, align: "right" },
  { id: "login", label: "Usuario", minWidth: 170, align: "right" },
];

export const GithubMembersListTableComponent: React.FC = () => {
  const { orgName } = useParams<{ orgName: string }>();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const members = await fetchGithubMembers(orgName);
        setMembers(members);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, [orgName]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleClick = (row: MemberEntity) => {
    localStorage.setItem("avatar_url", row.avatar_url);
    navigate(`/../../github-members-details/${row.id}/${orgName}/${row.login}`);
  };
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      background: "#F0F0F0",
                      fontSize: "20px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {members
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id}>
                          {column.id === "avatar_url" ? (
                            <img
                              src={value}
                              alt={`Avatar de ${row.login}`}
                              width="100px"
                            />
                          ) : column.id === "login" ? (
                            <div
                              className="login"
                              onClick={() => handleClick(row)}
                            >
                              {value}
                            </div>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 30]}
          component="div"
          count={members.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
