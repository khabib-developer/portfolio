import { useEffect, useState } from "react";

export const ProgressiveImage: React.FC<{
  placeholderSrc: string;
  src: string;
}> = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setloading(false);
    };
  }, [src]);
  return (
    <img
      {...{ src: imgSrc, ...props }}
      style={{ opacity: loading ? "0.5" : "1" }}
      alt={"work"}
      className="image"
    />
  );
};
