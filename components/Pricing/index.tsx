// prettier-ignore
import Image from "next/image";
import { Heading } from "../../styles/globals";
// prettier-ignore
import {AddConfirm,AddToCart,NewPrice,Price,PricingWrapper,Quantity,} from "./PricingStyled";

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
        <Quantity>
          <Image src="/assets/icon-minus.svg" width={10} height={5} />
          <span className="count">0</span>
          <Image src="/assets/icon-plus.svg" width={10} height={10} />
        </Quantity>
        <AddConfirm>
          <Image src="/assets/icon-cart-white.svg" width={15} height={15} />
          <span>Add to cart</span>
        </AddConfirm>
      </AddToCart>
    </PricingWrapper>
  );
}

export default Pricing;

//TODO: Complete Pricing section
