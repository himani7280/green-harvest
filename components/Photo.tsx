import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/* Responsive cover image */
export function Photo({ src, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
<<<<<<< HEAD
      preload={priority}
=======
      priority={priority}
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
      sizes={sizes}
      className={`object-cover transition-transform duration-[1200ms] ease-out ${className}`}
    />
  );
}
