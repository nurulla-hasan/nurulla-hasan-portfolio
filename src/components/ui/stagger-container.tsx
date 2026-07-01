"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  once?: boolean;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
}

const childVariants = (direction: Direction, distance: number) => {
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

const containerVariants = (
  staggerDelay: number,
  delay: number,
  direction: Direction,
  distance: number
) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delay,
    },
  },
});

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  once = false,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 40,
  threshold = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: threshold,
      }}
      variants={containerVariants(staggerDelay, delay, direction, distance)}
      className={cn(className)}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        // If child is already a motion component, pass variants directly
        const childEl = child as React.ReactElement<{
          variants?: unknown;
          transition?: unknown;
        }>;

        // If the child already has variants defined (e.g. another motion component), don't override
        if (childEl.props.variants) return child;

        return (
          <motion.div
            variants={childVariants(direction, distance)}
            transition={{ duration }}
            style={{ originY: 0 }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
