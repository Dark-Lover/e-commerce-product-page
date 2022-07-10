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
`;
export const ShowLeft = styled.div`
  flex: 1;
  position: relative;

  img {
    object-fit: cover;
    height: 100%;
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
`;

// Right side styling
export const ShowRight = styled.div`
  flex: 1;
  padding: 0.8rem 1rem;
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
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.neutral.darkGrayishBlue};
`;
