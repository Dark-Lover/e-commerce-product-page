import { ReactNode } from "react";
import { Thumbnails } from "./ThumbnailListStyled";

interface ThumbnailListProps {
  children: ReactNode;
}
function ThumbnailList({ children }: ThumbnailListProps) {
  return <Thumbnails>{children}</Thumbnails>;
}
export default ThumbnailList;
