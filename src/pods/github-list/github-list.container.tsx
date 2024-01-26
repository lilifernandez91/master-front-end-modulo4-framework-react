import React from "react";
import "@/pods/github-list/github-list.styles.css";
import { ButtonComponent } from "@/common-app/components/button.component";
import { useNavigate } from "react-router";
import { switchRoutes } from "@/router/routes";
import { GithubListComponent } from "@/pods/github-list/github-list.component";

export const GithubListContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="github-list-container">
      <h1 className="github-list-title">Miembros de la organización</h1>
      <div className="github-list-button">
        <ButtonComponent
          onClick={() => {
            navigate(switchRoutes.root);
          }}
          text="Volver al inicio"
        />
      </div>
    </div>
  );
};
