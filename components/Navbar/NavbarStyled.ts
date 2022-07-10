import styled from "styled-components";
// Navbar

export const NavWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  z-index: 122;
  @media (min-width: 768px) {
    background-color: white;
    position: relative;
    flex: unset;
    height: 100%;
    margin-left: 5rem;
  }
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.neutral.lightGrBlue};
  position: fixed;
  width: 60%;
  height: 100vh;
  left: 0;
  z-index: 122;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    background-color: white;
    position: relative;
    height: unset;
    left: unset;
    z-index: unset;
    padding: 0rem 2rem;
    height: 100%;
  }
`;
export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
export const NavItem = styled.li`
  font-weight: 600;
  cursor: pointer;
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    font-weight: 500;
    position: relative;

    color: ${({ theme }) => theme.neutral.darkGrayishBlue};
    &::before {
      content: "";
      row-gap: 1rem;
      position: absolute;
      height: 2px;
      width: 0%;
      background-color: ${({ theme }) => theme.primary.main};
      z-index: 1000;
      bottom: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        height: 2px;
        width: 100%;
      }
    }
  }
`;
