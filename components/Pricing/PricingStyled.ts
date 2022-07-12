import styled from "styled-components";

export const PricingWrapper = styled.div`
  margin: 0.7rem 0;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  span {
    font-size: 0.8rem;
    display: block;
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.primary.main};
    font-weight: 600;
    background-color: ${({ theme }) => theme.primary.pale};
  }
  .old_price {
    color: ${({ theme }) => theme.neutral.grayishBlue};
    background-color: ${({ theme }) => theme.neutral.lightGrBlue};
    display: block;
    text-decoration: line-through;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`;
export const NewPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const AddToCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 450px;
  }
`;
export const Quantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  background-color: ${({ theme }) => theme.neutral.lightGrBlue};
  border-radius: 0.5rem;
  .count {
    font-weight: 600;
  }
`;
export const AddConfirm = styled.div`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.primary.main};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 13px 66px -10px rgba(255, 188, 108, 0.75);
  span {
    font-weight: 400;
    color: white;
    letter-spacing: 0.02rem;
  }
`;
