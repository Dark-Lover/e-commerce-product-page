import styled from "styled-components";
export const CartWrapper = styled.div`
  position: absolute;
  background-color: white;
  height: 180px;
  width: 90%;
  top: 80px;
  z-index: 99;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 17px 0px rgba(224, 220, 220, 0.75);

  @media (min-width: 768px) {
    right: 1rem;
    width: 300px;
    margin-right: unset;
  }
`;
export const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.neutral.lightGrBlue};
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;
