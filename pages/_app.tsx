import GlobalStyles from "../styles";
import type { AppProps } from "next/app";
import MainLayout from "../components/templates/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
