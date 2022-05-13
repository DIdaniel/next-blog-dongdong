import React from "react";
import NextLink from "next/link";
import { Box, Button, css } from "@mui/material";
import styled from "@emotion/styled";

const NavBarStyle = styled(Box)(({ theme }) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: -webkit-sticky; /* 사파리 브라우저 지원 */
    position: sticky;
    top: 0;

    background: #f2cd0b;
    padding: 10px;
    width: 100%;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.05),
      0px 3px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05);

    z-index: 999;
  `;
});

const InnerBox = styled(Box)(({ theme }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 768px;
    width: 100%;
  `;
});

const MenuStyle = styled(Box)(({ theme }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
});

const NavBar = () => {
  return (
    <NavBarStyle>
      <InnerBox>
        <NextLink href="https://stackblitz.com/">
          <a
            target="_blank"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Londrina Shadow, cursive",
              }}
            >
              Stackblitz
            </Button>
          </a>
        </NextLink>
        <NextLink href="/">
          <a
            style={{
              color: "#000",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Londrina Shadow, cursive",
            }}
          >
            DDong's Playground
          </a>
        </NextLink>
        <MenuStyle>
          <NextLink href="/">
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Londrina Shadow, cursive",
              }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog">
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Londrina Shadow, cursive",
              }}
            >
              Blog
            </Button>
          </NextLink>
          <NextLink href="/about">
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Londrina Shadow, cursive",
              }}
            >
              About
            </Button>
          </NextLink>
        </MenuStyle>
      </InnerBox>
    </NavBarStyle>
  );
};

export default NavBar;
