import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const DropDownBox = ({ dataType, setDataType }) => {
  return (
    <div>
      <Box sx={{ minWidth: 130 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Data Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dataType}
            label="Data Type"
            onChange={(e) => setDataType(e.target.value)}
          >
            <MenuItem value={"String"}>String</MenuItem>
            <MenuItem value={"Number"}>Number</MenuItem>
            <MenuItem value={"Password"}>Password</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
