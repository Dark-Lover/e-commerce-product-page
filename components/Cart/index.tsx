import { useContext } from "react";
import { Heading } from "../../styles/globals";
import { cartContext } from "../../utils/Context/CountProvider";
import CartItem from "../CartItem";
// prettier-ignore
import { CartContent, CartWrapper, Hr } from "./CartStyled";

function Cart() {
  const { added } = useContext(cartContext);
  return (
    <CartWrapper>
      <Heading
        mgx={15}
        mgy={10}
        size="small"
        style={{ textTransform: "unset" }}
      >
        Cart
      </Heading>
      <Hr />
      <CartContent>
        {added ? (
          <CartItem />
        ) : (
          <Heading
            size="small"
            style={{ color: "gray", textTransform: "unset" }}
          >
            Your cart is empty
          </Heading>
        )}
      </CartContent>
    </CartWrapper>
  );
}
export default Cart;
