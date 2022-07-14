// prettier-ignore
import Image from "next/image";
import { useContext, useState } from "react";
import { Heading } from "../../styles/globals";
import { cartContext } from "../../utils/Context/CountProvider";
// prettier-ignore
import {AddConfirm,AddToCart,NewPrice,Price,PricingWrapper,Quantity,} from "./PricingStyled";

function Pricing() {
  // const cartCount = useContext(myContext);
  const { cartCount, setCartCount, setAdded } = useContext(cartContext);

  // const [cartItems, setCartItems] = useState<number>(0);
  const handleCartCount = (type: string) => {
    if (type === "-") {
      setCartCount((prevState) => {
        if (prevState === 0) return 0;
        else {
          return prevState - 1;
        }
      });
    }
    if (type === "+") {
      setCartCount((prevState) => prevState + 1);
    }
  };
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
          <Image
            src="/assets/icon-minus.svg"
            width={10}
            height={5}
            onClick={() => handleCartCount("-")}
            style={{ cursor: "pointer" }}
          />
          <span className="count">{cartCount}</span>
          <Image
            src="/assets/icon-plus.svg"
            width={10}
            height={10}
            onClick={() => handleCartCount("+")}
            style={{ cursor: "pointer" }}
          />
        </Quantity>
        <AddConfirm onClick={() => setAdded(cartCount > 0 ? 1 : 0)}>
          <Image src="/assets/icon-cart-white.svg" width={15} height={15} />
          <span>Add to cart</span>
        </AddConfirm>
      </AddToCart>
    </PricingWrapper>
  );
}

export default Pricing;
