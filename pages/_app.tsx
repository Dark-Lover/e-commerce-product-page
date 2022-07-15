import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-commerce Product Page | Houssine</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
