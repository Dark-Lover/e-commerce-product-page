import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  main{
    max-width: 1200px;
    margin: auto;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

interface ThemeInterface {
  primary: {
    main: string;
    pale: string;
  };
  neutral: {
    darkBlue: string;
    darkGrayishBlue: string;
    grayishBlue: string;
    lightGrBlue: string;
  };
}

const theme: ThemeInterface = {
  primary: {
    main: "hsl(26, 100%, 55%)",
    pale: "hsl(25, 100%, 94%)",
  },
  neutral: {
    darkBlue: "hsl(220, 13%, 13%)",
    darkGrayishBlue: "hsl(219, 9%, 45%)",
    grayishBlue: "hsl(220, 14%, 75%)",
    lightGrBlue: "hsl(223, 64%, 98%)",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hello</title>
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
