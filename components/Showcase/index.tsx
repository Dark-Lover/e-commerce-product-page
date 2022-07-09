import Image from "next/image";
// prettier-ignore
import {Heading, ShowLeft,ShowRight,ShowWrapper,SwitchProd,} from "./ShowcaseStyled";

function Showcase() {
  return (
    <ShowWrapper>
      <ShowLeft>
        <Image src="/assets/image-product-1.jpg" layout="fill" />
        <SwitchProd side="left" />
        <SwitchProd side="right" />
      </ShowLeft>
      <ShowRight>
        <Heading size="small" color="primary">
          Sneaker Company
        </Heading>
        <Heading size="lg" color="secondary">
          Fall Limited Edition Sneakers
        </Heading>
      </ShowRight>
    </ShowWrapper>
  );
}

export default Showcase;
