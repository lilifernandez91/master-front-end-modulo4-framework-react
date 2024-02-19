import React, { useEffect, useState } from "react";
import "@/pods/github-detail/github-detail.styles.css";
import { ButtonComponent } from "@/common-app/components/button.component";
import { useNavigate } from "react-router";
import { switchRoutes } from "@/router/routes";
import { GitHubDetailComponent } from "@/pods/github-detail/github-detail.component";
import { getGitHubDetailData } from "@/pods/github-detail/api/api";

export const GitHubDetailContainer: React.FC<{
  organization: string;
  memberId: string;
}> = ({ organization, memberId }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    getGitHubDetailData(memberId)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener detalles de un miembro:", error);
      });
  }, [memberId]);

  return (
    <div className="github-detail-container">
      <h1 className="github-detail-title">Miembros de la Organización</h1>
      <div className="github-detail-button">
        <ButtonComponent
          onClick={() => {
            navigate(`${switchRoutes.githubList}/${organization}`);
          }}
          text="Volver"
        />
      </div>
      <GitHubDetailComponent memberId={memberId} data={data} />
    </div>
  );
};
