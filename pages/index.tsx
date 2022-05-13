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
  //
};

const Home = (props: HomeProps) => {
  /** Property */
  const { ...others } = props;
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
        background: "#F2CD0B",
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

      <Footer />
    </Box>
  );
};

export default Home;
