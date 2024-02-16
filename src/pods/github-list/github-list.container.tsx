import React from "react";
import "@/pods/github-list/github-list.styles.css";
import { ButtonComponent } from "@/common-app/components/button.component";
import { useNavigate } from "react-router";
import { switchRoutes } from "@/router/routes";
import { GitHubListComponent } from "@/pods/github-list/github-list.component";

export const GitHubListContainer: React.FC<{
  organization: string;
}> = ({ organization }) => {
  const navigate = useNavigate();

  return (
    <div className="github-list-container">
      <h1 className="github-list-title">Miembros de la Organización</h1>
      <div className="github-list-button">
        <ButtonComponent
          onClick={() => {
            navigate(switchRoutes.organization);
          }}
          text="Volver"
        />
      </div>
      <GitHubListComponent organization={organization} />
    </div>
  );
};
