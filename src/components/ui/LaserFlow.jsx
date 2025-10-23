"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const LaserFlow = ({ children, className }) => {
  const ref = useRef(null);
  const { x, y } = useMouse();

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-full w-full overflow-hidden bg-black text-white",
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px z-30 transition duration-300" />
      <motion.div
        className="pointer-events-none absolute -inset-px z-30 transition duration-300"
        style={{
          background: `radial-gradient(
            600px circle at ${x}px ${y}px,
            rgba(237, 85, 101, 0.1),
            transparent 40%
          )`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

const useMouse = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const ref = useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();

      if (rect) {
        const width = rect.width;
        const height = rect.height;

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }
    };

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref.current]);

  return { x: mouseXSpring, y: mouseYSpring, ref };
};
