import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MemberDetailApi } from "@/pods/github-detail/api/apiModel";
import { ButtonComponent } from "@/common-app/components/button.component";
import { useNavigate } from "react-router";
import { switchRoutes } from "@/router/routes";

const DetailCardComponent: React.FC<{
  memberId: string;
  data: MemberDetailApi;
  organization: string;
}> = ({ memberId, data, organization }) => {
  const navigate = useNavigate();

  const formatName = (name: string) => {
    if (!name) return "";
    return name
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="github-detail-card">
      <h1 className="github-detail-title">Miembros de la Organización</h1>
      <div className="github-detail-button">
        <ButtonComponent
          onClick={() => {
            navigate(`${switchRoutes.githubList}/${organization}`);
          }}
          text="Volver"
        />
      </div>
      {data && (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={data.avatar_url}
              alt={data.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {formatName(data.name)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default DetailCardComponent;
