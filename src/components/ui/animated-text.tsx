"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  once?: boolean;
  type?: "words" | "chars" | "lines";
  staggerDelay?: number;
  duration?: number;
}

export function AnimatedText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  once = true,
  type = "words",
  staggerDelay = 0.04,
  duration = 0.4,
}: AnimatedTextProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.span;

  if (type === "words") {
    const words = text.split(" ");

    const container = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const child = {
      hidden: {
        opacity: 0,
        y: 20,
        rotateX: -90,
      },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          duration,
          ease: [0.25, 0.1, 0.25, 1] as const,
        },
      },
    };

    return (
      <MotionTag
        className={cn("inline-flex flex-wrap", className)}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        aria-label={text}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block whitespace-nowrap"
            aria-hidden="true"
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  // Chars mode
  if (type === "chars") {
    const chars = text.split("");

    const container = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const child = {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: [0.25, 0.1, 0.25, 1] as const,
        },
      },
    };

    return (
      <MotionTag
        className={cn("inline-flex flex-wrap", className)}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        aria-label={text}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  // Lines mode - split by newline
  const lines = text.split("\n");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <MotionTag
      className={cn("inline-flex flex-col", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      aria-label={text}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          variants={child}
          className="block"
          aria-hidden="true"
        >
          {line}
        </motion.span>
      ))}
    </MotionTag>
  );
}
