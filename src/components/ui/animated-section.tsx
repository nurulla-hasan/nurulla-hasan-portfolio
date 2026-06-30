"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";
type ElementTag = "div" | "section" | "article" | "span" | "header" | "footer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  distance?: number;
  as?: ElementTag;
  /** Skip animation entirely on mobile for performance */
  disableMobile?: boolean;
}

const directionVariants = (
  direction: Direction,
  distance: number
) => {
  switch (direction) {
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "none":
      return {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      };
  }
};

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = false,
  threshold = 0.2,
  className,
  distance = 60,
  as: Tag = "div",
  disableMobile = false,
}: AnimatedSectionProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: disableMobile
          ? "-50px"
          : undefined,
        amount: threshold,
      }}
      variants={directionVariants(direction, distance)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth ease
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
