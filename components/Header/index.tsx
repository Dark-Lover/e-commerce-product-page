import { useContext, useState } from "react";
import { cartContext } from "../../utils/Context/CountProvider";
import Cart from "../Cart";
import Navbar from "../Navbar";
//prettier-ignore
import {HeaderWrapper,NavBrand,UserCart,Logo,Container,StyledImage,
} from "./HeaderStyled";
function Header() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const { added } = useContext(cartContext);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  useState;
  return (
    <>
      <HeaderWrapper>
        <Container>
          <NavBrand>
            <StyledImage
              src={
                menuToggle ? "/assets/icon-close.svg" : "/assets/icon-menu.svg"
              }
              width={18}
              height={18}
              onClick={() => setMenuToggle(!menuToggle)}
            />
            <Logo>sneakers</Logo>
          </NavBrand>
          <UserCart>
            <StyledImage
              src="/assets/icon-cart.svg"
              width={20}
              height={20}
              className="cart"
              onClick={() => setCartOpen(!cartOpen)}
            />
            <StyledImage
              src="/assets/image-avatar.png"
              width={35}
              height={35}
              className="avatar"
            />
            <span className="cart_count">{added}</span>
          </UserCart>
          <Navbar menuState={menuToggle} />
        </Container>
        {cartOpen && <Cart />}
      </HeaderWrapper>
    </>
  );
}

export default Header;
