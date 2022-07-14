import { ThumbImage } from "./ThumbStyled";
import React from "react";
interface ThumbnailProps {
  src: string;
  select: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  isSel: boolean;
}
function Thumbnail({ src, select, id, isSel }: ThumbnailProps) {
  return (
    <ThumbImage
      src={`/assets/${src}`}
      width={100}
      height={100}
      style={{ cursor: "pointer", opacity: `${isSel ? "0.5" : "1"}` }}
      onClick={() => select(id)}
    ></ThumbImage>
  );
}
export default Thumbnail;
