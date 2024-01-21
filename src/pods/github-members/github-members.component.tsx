import { useNavigate } from "react-router-dom";
import * as React from "react";
import { GithubMembersModalComponent } from "./components/github-members-modal.component";
import { GithubMembersVolverComponent } from "./components/github-members-volver.component";
import { GithubMembersFormComponent } from "./components/github-members-form.componet";
import { fetchValidateOrganization } from "./api/github-members.api";
import "./github-members.styles.css";

export const GithubMembersComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateOrganization = normalizeString(username);

    const fetchData = async () => {
      try {
        await fetchValidateOrganization(validateOrganization);
        navigate(`/github-members-list/${validateOrganization}`);
      } catch (error) {
        showModal();
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  };

  return (
    <div className="form-content">
      <GithubMembersFormComponent
        handleNavigation={handleNavigation}
        username={username}
        setUsername={setUsername}
      />
      <GithubMembersVolverComponent />
      <GithubMembersModalComponent handleClose={handleClose} open={open} />
    </div>
  );
};
