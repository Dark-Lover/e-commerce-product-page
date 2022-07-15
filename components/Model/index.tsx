import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ProductThumbnails } from "../../data/Products";
import { useMediaQuery } from "../../utils/mediaQuery";
import { ProductImage, ShowLeft, SwitchProd } from "../Showcase/ShowcaseStyled";
import Thumbnail from "../Thumbnail";
import ThumbnailList from "../ThumbnailList";

const ModelWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
function ModelView() {
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
      {!isMobile && (
        <ModelWrapper>
          <ShowLeft>
            <>
              <ProductImage>
                <Image
                  src={`/assets/image-product-${selected}.jpg`}
                  layout="fill"
                  priority
                />
                <SwitchProd side="left" onClick={prev} />
                <SwitchProd side="right" onClick={next} />
              </ProductImage>{" "}
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
