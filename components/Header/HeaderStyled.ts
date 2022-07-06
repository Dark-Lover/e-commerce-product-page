import styled from "styled-components";
import Image from "next/image";
export const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.primary.main};
  padding: 0rem 1rem;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const NavBrand = styled.div`
  background-color: "red";
  display: flex;
  align-items: baseline;
  flex: 1;
`;
export const StyledImage = styled(Image)`
  cursor: pointer;
`;

export const Logo = styled.h1`
  margin-left: 0.3rem;
  font-size: 25px;
  font-weight: 700;
`;
export const UserCart = styled.div`
  flex: 1;
  background-color: green;
  display: flex;
  align-items: center;
`;

export const TestHeading = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.3rem;
  letter-spacing: 0.03rem;
`;
