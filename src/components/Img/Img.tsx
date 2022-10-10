import { useState } from "react";
import ImgNotFound from "../../assets/imges/image.jpg";
import { Image } from "./img.style";

interface IProps {
  src: string;
}

export default function Img(props: IProps) {
  const [imgError, setImgError] = useState<boolean>(false);
  return (
    <Image
      onError={() => setImgError(true)}
      src={imgError ? ImgNotFound : props.src}
      alt="img not found"
    />
  );
}
