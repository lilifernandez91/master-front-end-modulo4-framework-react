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
import { Link, generatePath } from "react-router-dom";
import { Box, Fab } from "@mui/material";

const columns = [
  { id: "avatar_url", label: "Avatar", minWidth: 170 },
  { id: "id", label: "Id", minWidth: 170, align: "right" },
  { id: "login", label: "Usuario", minWidth: 170, align: "right" },
];

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const { orgName } = useParams<{ orgName: string }>();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${orgName}/members`)
      .then((response) => response.json())
      .then((json) => {
        setMembers(json);
      });
  }, [orgName]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table-content">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
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
                            <Link
                              to={generatePath("/detail/:id/:orgName", {
                                id: row.login,
                                orgName: orgName,
                              })}
                            >
                              {value}
                            </Link>
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
          rowsPerPageOptions={[10, 15]}
          component="div"
          count={members.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Link to="/">
        <Box sx={{ m: 1 }}>
          <Fab color="primary" variant="extended">
            Volver
          </Fab>
        </Box>
      </Link>
    </div>
  );
};
