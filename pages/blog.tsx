import React, { useEffect } from "react";
import { Box, css, styled, Typography } from "@mui/material";
import { BasicModal, CustomChip, MUIInput } from "../components/atomics";
import { GetServerSideProps } from "next";

const CustomChipBox = styled(Box)(({ theme }) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    row-gap: 20px;
    column-gap: 30px;

    padding: 15px 15px 0 15px;
  `;
});

const subject = [
  "Javascript",
  "Typescript",
  "React",
  "Vue",
  "HTML",
  "CSS",
  "Vim",
  "CS",
  "Interview",
  "Private",
];

type BlogProps = {
  message: string;
};

const Blog = (props: BlogProps) => {
  /** Property */
  const { message, ...others } = props;

  /** Function */

  /** Render */
  return (
    <Box sx={{ background: "#F2CD0B" }}>
      <CustomChipBox>
        {subject.map((item, index) => (
          <CustomChip
            key={index}
            label={item}
            sx={{
              fontWeight: "bold",
              width: "150px",
              height: "35px",
              background: "#fff",
              border: "none",
              boxShadow:
                "0px 3px 3px -2px rgba(0, 0, 0, 0.05), 0px 3px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05)",
            }}
          />
        ))}
      </CustomChipBox>
      <BasicModal />
      <MUIInput />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        <Box
          sx={{
            display: "inlineFlex",
            flexWrap: "wrap",
            margin: "auto",
            columnGap: "30px",
            width: "100%",
          }}
        >
          {Array.from(Array(5)).map((item, index) => (
            <Box key={index} sx={{ marginBottom: "40px" }}>
              <Box
                sx={{
                  flex: 1,
                  width: "334px",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={message}
                  alt="images"
                  style={{
                    height: "100%",
                    width: "100%",
                    boxShadow:
                      "0px 3px 3px -2px rgba(0, 0, 0, 0.05), 0px 3px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05)",
                  }}
                />
              </Box>
              <Typography sx={{ width: "334px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                cumque ea, iste rem rerum saepe tempore tenetur. Ad dicta minima
                nulla recusandae ut!{" "}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const { message, status } = await response.json();

  if (status !== "success") {
    throw new Error("error");
  }

  return {
    props: {
      message,
    },
  };
};

export default Blog;
