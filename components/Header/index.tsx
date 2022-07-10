import { useState } from "react";
import Navbar from "../Navbar";
//prettier-ignore
import {HeaderWrapper,NavBrand,UserCart,Logo,Container,StyledImage,
} from "./HeaderStyled";
function Header() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
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
            />
            <StyledImage
              src="/assets/image-avatar.png"
              width={35}
              height={35}
              className="avatar"
            />
            <span className="cart_count">3</span>
          </UserCart>
          <Navbar menuState={menuToggle} />
        </Container>
      </HeaderWrapper>
    </>
  );
}

export default Header;
