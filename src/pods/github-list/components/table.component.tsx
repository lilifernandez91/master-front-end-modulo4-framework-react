import React, { useEffect, useState } from "react";
import { getGitHubListData } from "@/pods/github-list/api/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "@/common-app/components";
import { switchRoutes } from "@/router/routes";

export const GitHubListTableComponent: React.FC<{
  organization: string;
}> = ({ organization }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGitHubListData(organization)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [organization]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Nombre de usuario</TableCell>
              <TableCell align="center">Detalles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((character, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <img
                        className="github-list-image"
                        src={character.avatar_url}
                        alt={character.login}
                        style={{ width: "80px", height: "80px" }}
                      />
                    </TableCell>
                    <TableCell align="center">{character.login}</TableCell>
                    <TableCell align="center">
                      <ButtonComponent
                        onClick={() => {
                          navigate(
                            `${switchRoutes.githubDetail}/${organization}/${character.login}`
                          );
                        }}
                        text="Ver"
                        color="primary"
                      />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count}`
        }
        labelRowsPerPage="Filas por página:"
      />
    </Paper>
  );
};
