import React from "react";
import Button from "@mui/material/Button";

interface ButtonComponentProps {
  onClick: () => void;
  text: string;
  className?: string;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  text,
  className,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={className}
    >
      {text}
    </Button>
  );
};
