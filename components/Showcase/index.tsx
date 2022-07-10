import Image from "next/image";
import Pricing from "../Pricing";
// prettier-ignore
import {Heading, ShowLeft,ShowRight,ShowWrapper,SwitchProd,Paragraph} from "./ShowcaseStyled";

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
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde
          minus, magni, qui, inventore dicta ea perspiciatis at veritatis
          aliquam voluptatibus? Necessitatibus, quibusdam.
        </Paragraph>
        <Pricing />
      </ShowRight>
    </ShowWrapper>
  );
}

export default Showcase;
