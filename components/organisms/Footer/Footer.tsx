import React from "react";
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ opacity: "0.4", marginTop: "20px", textAlign: "center" }}>
      &copy; {new Date().getFullYear()} KIM DONG IL. All Rights Reserved.
    </Box>
  );
};
