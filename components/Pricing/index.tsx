// prettier-ignore
import { Heading } from "../../styles/globals";
import {
  AddConfirm,
  AddToCart,
  NewPrice,
  Price,
  PricingWrapper,
  Quantity,
} from "./PricingStyled";

function Pricing() {
  return (
    <PricingWrapper>
      <Price>
        <NewPrice>
          <Heading size="lg" color="secondary" mgy={10}>
            $125.00
          </Heading>
          <span>50%</span>
        </NewPrice>
        <span className="old_price">$250.00</span>
      </Price>
      <AddToCart>
        <Quantity>+ 1 -</Quantity>
        <AddConfirm></AddConfirm>
      </AddToCart>
    </PricingWrapper>
  );
}

export default Pricing;

//TODO: Complete Pricing section
