import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const DetailPage: React.FC = () => {
  const { id, orgName, userName } = useParams<{
    id: string;
    orgName: string;
    avatar_url: string;
    userName: string;
  }>();
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const localStorageAvatarUrl = localStorage.getItem("avatar_url");
    if (localStorageAvatarUrl) {
      setAvatarUrl(localStorageAvatarUrl);
    }
  }, []);

  const getCardDetail = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Detalle de un miembro de la organización
            </Typography>
            {avatarUrl && (
              <CardMedia
                component="img"
                height="100%"
                src={avatarUrl}
                alt={`Avatar de ${id}`}
              />
            )}
            <Typography
              sx={{ marginTop: "8px" }}
              variant="body2"
              color="text.secondary"
            >
              {userName}
            </Typography>
            <Link className="card-detail-link" to={`/list/${orgName}`}>
              Volver
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return <div className="card-detail">{getCardDetail()}</div>;
};
