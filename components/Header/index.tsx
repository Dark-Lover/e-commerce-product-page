//prettier-ignore
import {
  HeaderWrapper,NavBrand,UserCart,Logo,Container,StyledImage, NavWrapper, NavBar, NavItems, NavItem,
} from "./HeaderStyled";
function Header() {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <NavBrand>
            <StyledImage src="/assets/icon-menu.svg" width={18} height={16} />
            <Logo>sneakers</Logo>
          </NavBrand>
          <UserCart>
            <StyledImage src="/assets/icon-cart.svg" width={20} height={20} />
            <StyledImage
              src="/assets/image-avatar.png"
              width={20}
              height={20}
            />
          </UserCart>
          <NavWrapper>
            <NavBar>
              <NavItems>
                <NavItem>Collections</NavItem>
                <NavItem>Men</NavItem>
                <NavItem>Women</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
              </NavItems>
            </NavBar>
          </NavWrapper>
        </Container>
      </HeaderWrapper>
    </>
  );
}

export default Header;
