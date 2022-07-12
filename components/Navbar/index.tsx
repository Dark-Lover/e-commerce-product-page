import { useMediaQuery } from "../../utils/mediaQuery";
import { NavWrapper, NavBar, NavItems, NavItem } from "./NavbarStyled";
const navItems: string[] = ["Collections", "Men", "Women", "About", "Contact"];

interface NavbarProps {
  menuState: boolean;
}
function Navbar({ menuState }: NavbarProps) {
  const matches = useMediaQuery(767);
  console.log(matches);
  return menuState ? (
    <NavWrapper>
      <NavBar>
        <NavItems>
          {navItems.map((item, i) => (
            <NavItem key={i}>{item}</NavItem>
          ))}
        </NavItems>
      </NavBar>
    </NavWrapper>
  ) : (
    <>
      {!matches && (
        <NavWrapper>
          <NavBar>
            <NavItems>
              {navItems.map((item, i) => (
                <NavItem key={i}>{item}</NavItem>
              ))}
            </NavItems>
          </NavBar>
        </NavWrapper>
      )}
    </>
  );
}

export default Navbar;
