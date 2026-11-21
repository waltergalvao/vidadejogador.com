import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** The screenshot's own size, so the screen keeps its shape. */
  width: number;
  height: number;
  className?: string;
};

/**
 * A phone drawn in CSS around a screenshot: the frame, the side buttons and
 * the island. Its height is set by `className` (`h-[...]`); the width follows
 * the screenshot.
 */
export function PhoneMockup({ src, alt, width, height, className = "" }: Props) {
  return (
    <div
      className={`relative rounded-[3.2rem] bg-zinc-900 p-[0.6rem] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)_inset] ring-1 ring-black ${className}`}
      style={{ aspectRatio: `${width + 60} / ${height + 60}` }}
    >
      <span className="absolute top-[18%] -left-[3px] h-[6%] w-[3px] rounded-l bg-zinc-700" />
      <span className="absolute top-[27%] -left-[3px] h-[9%] w-[3px] rounded-l bg-zinc-700" />
      <span className="absolute top-[24%] -right-[3px] h-[12%] w-[3px] rounded-r bg-zinc-700" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 400px, 80vw"
          className="object-cover object-top"
        />
        <span className="absolute top-[1.4%] left-1/2 h-[3.6%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
