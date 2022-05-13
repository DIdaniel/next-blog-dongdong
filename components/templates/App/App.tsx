import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import MainLayout from "../Layout";

const App = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          background: "#f4ede5",
          width: "100%",
          height: "100%",
          padding: "24px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          👋 Heyy, I&apos;m DONGDONG!
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "600", mb: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
          aperiam debitis eum exercitationem, iste odio, repellat rerum sapiente
          sequi sit soluta veritatis. Alias aliquam dignissimos eligendi et in
          laboriosam?
        </Typography>
        <Divider />
      </Box>
    </MainLayout>
  );
};

export default App;
