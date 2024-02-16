import React from "react";
import Button from "@mui/material/Button";

interface ButtonComponentProps {
  onClick: () => void;
  text: string;
  className?: string;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  text,
  className,
  color = "success",
}) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      className={className}
    >
      {text}
    </Button>
  );
};
