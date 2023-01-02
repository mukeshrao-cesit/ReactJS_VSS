import React from "react";
import Button from "@mui/material/Button";

export const ButtonField = ({ onClick }) => {
  return (
    <div>
      <Button onClick={() => onClick()} variant="contained">
        Submit
      </Button>
    </div>
  );
};
