import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface ButtonImageProps {
  title: string;
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  imgClassName?: string;
}

const ButtonImage: NextPage<ButtonImageProps> = ({
  title,
  href,
  alt,
  height,
  src,
  width,
  imgClassName,
}) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="bg-secondary w-3/4 md:w-auto mx-auto md:mx-0 hover:shadow py-2 px-4 rounded-full hover:opacity-75 transition"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${imgClassName ? imgClassName : "inline-block mr-1"}`}
      />
      {title}
    </Link>
  );
};

export default ButtonImage;
