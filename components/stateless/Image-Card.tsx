import { NextPage } from "next";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  className?: string;
}

const ImageCard: NextPage<ImageCardProps> = ({
  alt,
  height,
  src,
  width,
  className,
  title,
}) => {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`${className ? className : ""} rounded shadow`}
      />
      <h5 className="font-medium pt-1">{title}</h5>
    </div>
  );
};

export default ImageCard;
