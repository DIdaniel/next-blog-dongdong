import Head from "next/head";
import { Box, css, styled } from "@mui/material";
import NavBar from "../../organisms/NavBar/NavBar";
import React from "react";
import { Footer } from "../../organisms/Footer";

const LayoutBox = styled(Box)(({ theme }) => {
  return css`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-bottom: 30px;
    background: #f0e7dc;
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
        <title>Playground</title>
      </Head>

      <NavBar />

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <main
          style={{
            maxWidth: "758px",
            marginTop: "50px",
            width: "100%",
            boxShadow:
              "0px 3px 3px -2px rgba(0, 0, 0, 0.05), 0px 3px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05)",
            borderRadius: "10px",
          }}
        >
          {children}
        </main>
      </Box>
    </LayoutBox>
  );
};

export default MainLayout;
