import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { ButtonComponent } from "@/common-app/components/button.component";
import { switchRoutes } from "@/router/routes";
import { MemberDetail } from "../github-list.vm";

export const GitHubListTableComponent: React.FC<{
  organization: string;
  data: MemberDetail[];
}> = ({ organization, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

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
    <>
      <h1 className="github-list-title">Miembros de la Organización</h1>
      <div className="github-list-button">
        <ButtonComponent
          onClick={() => {
            navigate(switchRoutes.organization);
          }}
          text="Volver"
        />
      </div>
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
    </>
  );
};
