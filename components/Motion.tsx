"use client";

import { animate, motion, useInView, useReducedMotion, useScroll, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = { children: ReactNode; delay?: number; className?: string; x?: number; y?: number };

/* Fade-in reveal */
export function Reveal({ children, delay = 0, className, x = 0, y = 36 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Clip-path image reveal */
export function ImageReveal({ children, className, from = "left", delay = 0 }: { children: ReactNode; className?: string; from?: "left" | "right" | "bottom"; delay?: number }) {
  const reduce = useReducedMotion();
  const hidden = { left: "inset(0% 100% 0% 0% round 16px)", right: "inset(0% 0% 0% 100% round 16px)", bottom: "inset(100% 0% 0% 0% round 16px)" }[from];
  const variants: Variants = {
    hidden: { clipPath: hidden, scale: 1.06 },
    show: { clipPath: "inset(0% 0% 0% 0% round 0px)", scale: 1, transition: { duration: 1.1, delay, ease: EASE } },
  };
  return (
    <motion.div className={className} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.div className="relative size-full" variants={variants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

const staggerParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: EASE } },
};

/* Stagger container */
export function Stagger({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div id={id} className={className} variants={staggerParent} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-70px" }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div className={className} style={style} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* Word-by-word reveal */
export function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: delay + i * 0.08, ease: EASE }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Slow zoom-out */
export function ZoomIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 16, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

/* Scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#86213f,#d9467a)]" />;
}

/* Floating animation */
export function Float({ children, className, amount = 10, duration = 5 }: { children: ReactNode; className?: string; amount?: number; duration?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} animate={reduce ? undefined : { y: [0, -amount, 0] }} transition={{ duration, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

type CounterProps = { value: number; suffix?: string };

export function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}
