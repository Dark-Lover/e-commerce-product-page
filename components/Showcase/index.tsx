import Image from "next/image";
import Pricing from "../Pricing";
// prettier-ignore
import {Heading, ShowLeft,ShowRight,ShowWrapper,SwitchProd,Paragraph, Thumbnails, ProductImage} from "./ShowcaseStyled";

function Showcase() {
  const isDesk: boolean = true;
  // const isDesk: boolean = false;
  return (
    <ShowWrapper>
      <ShowLeft>
        <ProductImage>
          <Image src="/assets/image-product-1.jpg" layout="fill" />
          <SwitchProd side="left" />
          <SwitchProd side="right" />
        </ProductImage>
        {isDesk && (
          <Thumbnails>
            <Image
              src="/assets/image-product-1-thumbnail.jpg"
              width={100}
              height={100}
            />
            <Image
              src="/assets/image-product-1-thumbnail.jpg"
              width={100}
              height={100}
            />
            <Image
              src="/assets/image-product-1-thumbnail.jpg"
              width={100}
              height={100}
            />
            <Image
              src="/assets/image-product-1-thumbnail.jpg"
              width={100}
              height={100}
            />
          </Thumbnails>
        )}
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
