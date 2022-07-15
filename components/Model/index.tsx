import Image from "next/image";
import { useState } from "react";
import { ProductThumbnails } from "../../data/Products";
import { useMediaQuery } from "../../utils/mediaQuery";
import { ProductImage, ShowLeft, SwitchProd } from "../Showcase/ShowcaseStyled";
import Thumbnail from "../Thumbnail";
import ThumbnailList from "../ThumbnailList";
import { ModelWrapper } from "./ModelStyled";

interface ModelViewProps {
  isOpen: boolean;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModelView({ isOpen, setModelOpen }: ModelViewProps) {
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
    <>
      {!isMobile && isOpen && (
        <ModelWrapper>
          <ShowLeft>
            <Image
              src={`/assets/icon-close-white.svg`}
              width={20}
              height={20}
              onClick={() => setModelOpen(false)}
            />
            <>
              <ProductImage>
                <Image
                  src={`/assets/image-product-${selected}.jpg`}
                  layout="fill"
                  priority
                />
                <SwitchProd side="left" onClick={prev} />
                <SwitchProd side="right" onClick={next} />
              </ProductImage>
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
            </>
          </ShowLeft>
        </ModelWrapper>
      )}
    </>
  );
}

export default ModelView;
