import {
  HeaderWrapper,
  NavBrand,
  UserCart,
  Logo,
  Container,
  StyledImage,
} from "./HeaderStyled";
function Header() {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <NavBrand>
            <StyledImage src="/assets/icon-menu.svg" width={20} height={16} />
            <Logo>sneakers</Logo>
          </NavBrand>
          <UserCart>Hello</UserCart>
        </Container>
      </HeaderWrapper>
    </>
  );
}

export default Header;
