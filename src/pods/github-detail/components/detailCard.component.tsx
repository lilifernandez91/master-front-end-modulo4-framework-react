import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { getGitHubDetailData } from "@/pods/github-detail/api/api";

const DetailCardComponent: React.FC<{
  memberId: string;
}> = ({ memberId }) => {
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

  const formatName = (name) => {
    if (!name) return "";
    return name
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="github-detail-card">
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
