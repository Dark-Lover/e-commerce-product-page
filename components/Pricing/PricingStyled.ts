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
`;
export const NewPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const AddToCart = styled.div``;
export const Quantity = styled.div``;
export const AddConfirm = styled.div``;
