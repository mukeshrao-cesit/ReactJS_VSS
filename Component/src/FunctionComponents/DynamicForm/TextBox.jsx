import React from "react";
import TextField from "@mui/material/TextField";

export const TextBox = ({ type, field, setField }) => {
  return (
    <div>
      <TextField
        value={field}
        id="outlined-basic"
        onChange={(e) => setField(e.target.value)}
        label={type}
        variant="outlined"
      />
    </div>
  );
};
