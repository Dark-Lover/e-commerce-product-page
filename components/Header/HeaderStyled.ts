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
  &.avatar {
    border: 2px solid transparent !important;
    transition: border 0.3s ease;
    border-radius: 50%;
    &:hover {
      border: 2px solid ${(props) => props.theme.primary.main} !important;
    }
  }
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
  position: relative;
  .cart_count {
    position: absolute !important;
    background-color: ${({ theme }) => theme.primary.main};
    color: white;
    width: 1rem;
    height: 1rem;
    font-size: 0.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    left: 10px;
    top: 18px;
  }
  @media (min-width: 768px) {
    order: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 80px;
    z-index: 100;
    .cart_count {
      left: 10px;
      top: 0px;
    }
  }
`;
