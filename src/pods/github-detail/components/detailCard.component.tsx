import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MemberDetailApi } from "@/pods/github-detail/api/apiModel";

const DetailCardComponent: React.FC<{
  memberId: string;
  data: MemberDetailApi;
}> = ({ memberId, data }) => {
  const formatName = (name: string) => {
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
