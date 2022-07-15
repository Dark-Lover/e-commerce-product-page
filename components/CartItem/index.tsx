import Image from "next/image";
import { useContext } from "react";
import { Column, Heading } from "../../styles/globals";
import { cartContext } from "../../utils/Context/CountProvider";
import { CartItemWrapper, ItemPriceTotal } from "./CartItemStyled";

function CartItem() {
  const { cartCount, setCartCount, setAdded } = useContext(cartContext);
  return (
    <CartItemWrapper>
      <Image
        src="/assets/image-product-1-thumbnail.jpg"
        width={50}
        height={50}
        style={{ borderRadius: "5px" }}
      />
      <Column>
        <Heading
          size="small"
          style={{
            color: "gray",
            textTransform: "unset",
            fontSize: "13px",
            fontWeight: "normal",
            marginBottom: "0",
          }}
        >
          Autumn Limited Edition..
        </Heading>
        <Heading
          size="small"
          style={{
            color: "gray",
            textTransform: "unset",
            fontSize: "13px",
            fontWeight: "normal",
            marginBottom: "0",
          }}
        >
          $125 x {cartCount}
          <ItemPriceTotal> ${125 * cartCount}.00 </ItemPriceTotal>
        </Heading>
      </Column>
      <Image
        src="/assets/icon-delete.svg"
        height={15}
        width={15}
        onClick={() => {
          setCartCount(0);
          setAdded(0);
        }}
      />
    </CartItemWrapper>
  );
}
export default CartItem;
