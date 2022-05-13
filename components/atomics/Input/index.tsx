import React from "react";
import { Box, TextField } from "@mui/material";

export const MUIInput = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
        padding: "0 35px",
      }}
    >
      <TextField
        placeholder="Search..."
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid lightGrey",
            borderRadius: "8px",
            "&:focus": {
              border: "2px solid red",
            },
          },
        }}
      />
    </Box>
  );
};
