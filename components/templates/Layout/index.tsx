import Head from "next/head";
import { Box, css, styled } from "@mui/material";
import NavBar from "../../organisms/NavBar/NavBar";
import React from "react";
import { Footer } from "../../organisms/Footer";

const LayoutBox = styled(Box)(({ theme }) => {
  return css`
    width: 100%;
    height: 100vh;
    background: #f0e7dc;
    border: 1px solid blue;
  `;
});

type MainLayoutProps = {
  children: JSX.Element;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LayoutBox>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="dong's blog" />
        <meta name="author" content="dong" />
        <meta name="author" content="dong's blog" />
        <title>Donglog - Playground</title>
      </Head>

      <NavBar />

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <main
          style={{
            border: "1px solid red",
            maxWidth: "758px",
            marginTop: "50px",
            width: "100%",
          }}
        >
          {children}
        </main>
      </Box>
    </LayoutBox>
  );
};

export default MainLayout;
