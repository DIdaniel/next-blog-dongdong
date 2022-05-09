import type { NextPage } from "next";
import { Box, Divider, Typography } from "@mui/material";
import { Footer } from "../components/organisms/Footer";
import React from "react";

const Home: NextPage = () => {
  return (
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
          fontWeight: "900",
          textAlign: "center",
          mb: 3,
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

      <Footer />
    </Box>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://picsum.photos/450/300");
};

export default Home;
