import styled from "styled-components";
import Image from "next/image";
export const HeaderWrapper = styled.header`
  /* border-bottom: 1px solid ${(props) => props.theme.primary.main}; */
  padding: 0rem 1rem;
  height: 70px;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  height: 100%;
  align-items: c;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const NavBrand = styled.div`
  background-color: "red";
  display: flex;
  align-items: center;
  flex: 4;

  & span {
    z-index: 1000;
    @media (min-width: 768px) {
      display: none !important;
      flex: 1;
    }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;

  @media (min-width: 768px) {
    order: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 80px;
    z-index: 100;
  }
`;
