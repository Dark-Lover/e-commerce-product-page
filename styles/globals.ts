import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  // new global styles
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  a {
    color: inherit;
    outline: none;
    text-decoration: none;
  }
  
  ul,
  ol,
  ul {
    list-style: none;
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol{
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea {
    background: none;
    border: none;
    font: inherit;
    outline: none;
  }
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
  button {
    color: inherit;
    padding: 0;
  }
  /* Font Families */
  body {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    max-width: 100rem;
    margin: 0 auto;
    outline: none;
  }
  body.no-scroll {
    overflow: hidden;
  }
`;

export interface ThemeInterface {
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

export const theme: ThemeInterface = {
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

// Global Components
interface PropsHeading {
  size?: string;
  color?: string;
  mgx?: number;
  mgy?: number;
}
export const Heading = styled.h2<PropsHeading>`
  margin-bottom: 0.5rem;
  font-weight: 600;
  ${({ size }) =>
    size === "small"
      ? "font-size:0.8rem ;text-transform:uppercase;font-weight: 600;letter-spacing:0.03rem"
      : "font-size:20px;     line-height: 1.5rem;letter-spacing:0.02rem ;font-weight: 700"};
  ${({ mgx = 0, mgy = 0 }) => `margin: ${mgy}px ${mgx}px`};
  ${({ color, theme }) =>
    color === "primary"
      ? `color: ${theme.primary.main}`
      : `color: ${theme.neutral.darkBlue}`};
  @media (min-width: 768px) {
    max-width: 450px;
    ${({ size }) =>
      size === "small" ? "font-size:1rem ;" : "font-size:24px;"};
    margin-bottom: 1.3rem;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
