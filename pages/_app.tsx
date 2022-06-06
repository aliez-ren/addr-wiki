import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ADDR•WIKI</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
