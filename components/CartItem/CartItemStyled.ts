import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  max-width: 320px;
`;
export const ItemPriceTotal = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.neutral.darkBlue};
`;
