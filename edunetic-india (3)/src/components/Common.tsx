import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export const TricolorIndia = () => (
  <span className="inline-block bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-clip-text text-transparent font-bold">
    India
  </span>
);

export const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
