import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hello</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/static/css/slick.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/css/slick-theme.css"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
