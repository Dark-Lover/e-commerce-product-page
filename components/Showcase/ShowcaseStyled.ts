import styled from "styled-components";

// Interfaces
interface PropsChange {
  side: string;
}
interface PropsHeading {
  size: string;
  color: string;
}

// Left side Styling
export const ShowWrapper = styled.div`
  height: calc(100vh - 73px);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    padding-top: 4rem;
  }
`;
export const ShowLeft = styled.div`
  flex: 1;
  position: relative;
  min-height: 50%;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    padding: 1rem;
    max-width: 500px;
  }
`;
export const ProductImage = styled.div`
  img {
    object-fit: cover;
    height: 100%;
  }
  @media (min-width: 768px) {
    position: relative;
    height: 60%;
    max-height: 700px;

    img {
      border-radius: 1rem;
    }
  }
`;

export const SwitchProd = styled.div<PropsChange>`
  cursor: pointer;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 50%;
  top: 40%;
  ${({ side }) => side}: 1rem;

  &::before {
    ${({ side }) => (side === "left" ? "content: '<';" : "content: '>';")}
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

// Right side styling
export const ShowRight = styled.div`
  flex: 1;
  padding: 0.8rem 1rem;
  @media (min-width: 768px) {
    padding: 2rem 2rem 0 2rem;
  }
`;
export const Heading = styled.h2<PropsHeading>`
  margin-bottom: 0.5rem;
  font-weight: 600;
  ${({ size }) =>
    size === "small"
      ? "font-size:0.8rem ;text-transform:uppercase;font-weight: 600;letter-spacing:0.03rem"
      : "font-size:20px;     line-height: 1.5rem;letter-spacing:0.02rem ;font-weight: 700"};
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

export const Paragraph = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.neutral.darkGrayishBlue};
  @media (min-width: 768px) {
    font-size: 1.1rem;
    max-width: 450px;
  }
`;

// Thumbnails on desktop

export const Thumbnails = styled.div`
  position: relative;
  padding: 1rem 0;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  gap: 1rem;
  img {
    border-radius: 0.5rem;
  }
`;
