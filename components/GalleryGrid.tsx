import type { CSSProperties } from "react";
import { HOME, IMG } from "@/data/data";
import { Photo } from "./Photo";
import { Stagger, StaggerItem } from "./Motion";

const { items } = HOME.gallery;

/* Mosaic slots: [left, top, width, height] */
const SLOTS = [
  [0, 0, 302, 160],
  [310, 0, 244, 159],
  [562, 0, 245, 283],
  [815, 0, 435, 153],
  [0, 168, 284, 148],
  [293, 168, 261, 148],
  [815, 162, 435, 298],
  [0, 325, 230, 135],
  [238, 325, 235, 135],
  [481, 292, 161, 168],
  [651, 292, 156, 168],
] as const;

const W = 1250;
const H = 460;
const pct = (value: number, total: number) => `${((value / total) * 100).toFixed(3)}%`;

export function GalleryGrid() {
  return (
    <Stagger className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:relative lg:block lg:aspect-[1250/460] lg:gap-0">
      {items.map((item, i) => {
        const [left, top, width, height] = SLOTS[i];
        const style = { "--l": pct(left, W), "--t": pct(top, H), "--w": pct(width, W), "--h": pct(height, H) } as CSSProperties;
        const isLast = i === items.length - 1;
        return (
          <StaggerItem
            key={item.image}
            style={style}
            className={`group relative overflow-hidden rounded-[12px] sm:rounded-[14px] lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:h-[var(--h)] lg:w-[var(--w)] lg:aspect-auto ${
              isLast ? "col-span-2 aspect-[16/5] sm:col-span-2 sm:aspect-[8/3] lg:col-span-1" : "aspect-[16/10] sm:aspect-[4/3]"
            }`}
          >
            <Photo src={IMG[item.image]} alt={item.alt} sizes="(min-width: 1024px) 435px, 50vw" className="group-hover:scale-110" />
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
