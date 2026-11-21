import { type ImgHTMLAttributes, useState } from "react";

/** Image that shows `fallback` (stock photo) until your own file exists. */
export function PhotoImg({
  src,
  fallback,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { src: string; fallback: string }) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      {...rest}
      src={current}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
