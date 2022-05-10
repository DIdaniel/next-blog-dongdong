import React, { useCallback, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import {
  Box,
  css,
  Divider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Footer } from "../components/organisms/Footer";
import { useForm } from "react-hook-form";
import { EmailField } from "../components/atomics";
import { LoadingButton } from "@mui/lab";

const SubmitLoadingButton = styled(LoadingButton)(({ theme }) => {
  return css`
    position: absolute;
    top: 80px;
    right: -20px;
    transform: translate(-50%, -50%);

    height: 50px;
    width: 150px;
  `;
});

type UserEmail = {
  email?: string;
};

enum EmailStatus {
  /** 평범한 상태 */
  Normal,
  /** 로딩중 */
  Loading,
  /** 안내 */
  Notice,
  /** Error */
  Error,
}

enum LoadingStatus {
  Normal,
  Pending,
  Success,
}

type HomeProps = {
  message: string;
};

const Home = ({ message }: HomeProps) => {
  /** Property */
  const { handleSubmit, control, register } = useForm<UserEmail>();

  const [status, setStatus] = useState(EmailStatus.Normal);
  const [isLoading, setIsLoading] = useState(LoadingStatus.Normal);

  /** Function */
  const onSubmit = useCallback((data: any) => {
    console.log("data >> ", data);
    setIsLoading(LoadingStatus.Pending);
    setTimeout(() => {
      setIsLoading(LoadingStatus.Normal);
    }, 1500);
  }, []);

  const submitClickHandler = useCallback(() => {}, []);

  /** Render */
  return (
    <Box
      sx={{
        background: "#f4ede5",
        // background: "#fff",
        // background: "#F2CD0B",
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

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          position: "relative",
          marginBottom: "20px",
          background: "#fff",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <EmailField
          id="email"
          name="email"
          type="email"
          control={control}
          initValue=""
          autoFocus={true}
          placeholder={"Your email address"}
          register={register}
          disabled={status === EmailStatus.Loading}
          style={{
            padding: "10px",
            "&.MuiOutlinedInput-input": {
              border: "2px solid lightGrey",
            },
          }}
        />
        {status === EmailStatus.Error && (
          <Box sx={{ color: "red" }}>ERRORRRRR</Box>
        )}
        <SubmitLoadingButton
          type="submit"
          variant="contained"
          loading={isLoading === LoadingStatus.Pending}
        >
          Subscribe
        </SubmitLoadingButton>
      </Box>

      <Divider />

      {Array.from(Array(3)).map((item, index) => (
        <Box key={index} sx={{ marginBottom: "40px" }}>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              overflow: "hidden",
              border: "1px dashed green",
              // background: "#cbae99",
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
          <Typography>Helloworld</Typography>
          <Divider sx={{ marginTop: "20px" }} />
        </Box>
      ))}
      <Footer />
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

export default Home;
