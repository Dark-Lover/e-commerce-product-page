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
`;

export const NavBrand = styled.div`
  background-color: "red";
  display: flex;
  align-items: baseline;
  flex: 4;
  > span {
    z-index: 10000;
  }
`;
export const StyledImage = styled(Image)`
  cursor: pointer;
`;

export const Logo = styled.h1`
  margin-left: 0.6rem;
  font-size: 32px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.neutral.darkBlue}; ;
`;
export const UserCart = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  z-index: 122;
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.neutral.lightGrBlue};
  position: fixed;
  width: 40%;
  height: 100vh;
  left: 0;
  z-index: 122;
  padding: 5rem 2rem;
`;
export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const NavItem = styled.li`
  font-weight: 600;
`;
