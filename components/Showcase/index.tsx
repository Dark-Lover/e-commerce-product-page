import Image from "next/image";
import Pricing from "../Pricing";
import Thumbnail from "../Thumbnail";
import ThumbnailList from "../ThumbnailList";
import { ProductThumbnails } from "../../data/Products";
// prettier-ignore
import { ShowLeft,ShowRight,ShowWrapper,SwitchProd,Paragraph,  ProductImage} from "./ShowcaseStyled";
import { useState } from "react";
import { useMediaQuery } from "../../utils/mediaQuery";
import { Heading } from "../../styles/globals";

interface ShowcaseProps {
  isOpen: boolean;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Showcase({ isOpen, setModelOpen }: ShowcaseProps) {
  const isMobile: boolean = useMediaQuery(767);

  const [selected, setSelected] = useState<number>(1);
  const next = () => {
    if (selected === 4) {
      setSelected(1);
    } else setSelected((prevState) => prevState + 1);
  };

  const prev = () => {
    if (selected === 1) {
      setSelected(4);
    } else {
      setSelected((prevState) => prevState - 1);
    }
  };

  return (
    <ShowWrapper>
      <ShowLeft>
        <ProductImage>
          <Image
            src={`/assets/image-product-${selected}.jpg`}
            layout="fill"
            priority
            onClick={() => setModelOpen(true)}
          />
          <SwitchProd side="left" onClick={prev} />
          <SwitchProd side="right" onClick={next} />
        </ProductImage>
        {!isMobile && (
          <ThumbnailList>
            {ProductThumbnails.map(({ id, thumbnail }) => (
              <Thumbnail
                src={thumbnail}
                key={id}
                select={setSelected}
                id={id}
                isSel={selected === id}
              />
            ))}
          </ThumbnailList>
        )}
      </ShowLeft>
      <ShowRight>
        <Heading size="small" color="primary" mgy={10}>
          Sneaker Company
        </Heading>
        <Heading size="lg" color="secondary" mgy={10}>
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
