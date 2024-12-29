import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageProps extends Omit<NextImageProps, "alt"> {
  alt: string;
  aspect?: {
    width: number;
    height: number;
  };
  className?: string;
}

export function Image({ alt, aspect, className, ...props }: ImageProps) {
  const aspectRatio = aspect
    ? `aspect-[${aspect.width}/${aspect.height}]`
    : "aspect-square";

  return (
    <div className={cn("overflow-hidden", aspectRatio, className)}>
      <NextImage className="h-full w-full object-cover" alt={alt} {...props} />
    </div>
  );
}
