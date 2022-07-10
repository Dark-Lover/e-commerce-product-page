import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <main style={{ maxWidth: "1200px", margin: "auto" }}>{children}</main>;
}

export default Layout;
