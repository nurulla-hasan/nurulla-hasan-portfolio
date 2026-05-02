import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";
import React from "react";

export const GithubIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const XIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export const InstagramIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

type NHLogoProps = React.SVGProps<SVGSVGElement>;

export const NHLogo = ({ className = "", ...props }: NHLogoProps) => {
  const topClipId = React.useId();
  const bottomClipId = React.useId();

  return (
    <svg
      viewBox="14 20 88 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <clipPath id={topClipId}>
          <path d="M14 20H102V40L14 65V20Z" />
        </clipPath>
        <clipPath id={bottomClipId}>
          <path d="M14 65L102 40V80H14V65Z" />
        </clipPath>
      </defs>

      {/* Walking line animation path - Slower and more visible */}
      <motion.path
        d="M14 20H54V80H14V20 M66 20H102V80H66V20 M0 72L120 28"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeDasharray="30 160"
        animate={{ strokeDashoffset: [0, -190] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 1, filter: "drop-shadow(0 0 2px var(--primary))" }}
      />

      <g clipPath={`url(#${topClipId})`} fill="currentColor">
        {/* N - increased height */}
        <path d="M14 20H26L42 58V20H54V80H42L26 42V80H14V20Z" />
        {/* H - increased height */}
        <path d="M66 20H78V44H90V20H102V80H90V56H78V80H66V20Z" />
      </g>

      {/* Bottom part - Shifted for "broken" effect */}
      <g clipPath={`url(#${bottomClipId})`} fill="var(--primary)" transform="translate(4, 0)">
        {/* N - increased height */}
        <path d="M14 20H26L42 58V20H54V80H42L26 42V80H14V20Z" />
        {/* H - increased height */}
        <path d="M66 20H78V44H90V20H102V80H90V56H78V80H66V20Z" />
      </g>
    </svg>
  );
};

// --- Custom Skills Icons ---

export const FrontendIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.rect 
      x="2" y="3" width="20" height="15" rx="2" 
      stroke="currentColor" strokeWidth="1.5"
      animate={{ strokeDasharray: ["0 100", "100 0"] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <path d="M2 14H22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <motion.path 
      d="M7 18H7.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <motion.path 
      d="M12 18H12.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
    />
    <motion.path 
      d="M17 18H17.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
    />
  </svg>
);

export const StateIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.circle 
      cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" 
      animate={{ r: [3, 4, 3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle 
      cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"
      animate={{ x: [0, 2, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.circle 
      cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"
      animate={{ x: [0, -2, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <path d="M7 12H9M15 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <motion.path 
      d="M12 4V9M12 15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

export const ArchitectureIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <motion.path 
      d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="1.5"
      animate={{ rotate: [0, 90, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <path d="M12 4V9M12 15V20M4 12H9M15 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
    <motion.circle 
      cx="12" cy="12" r="1" fill="currentColor" 
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

export const FocusIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.path 
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
      animate={{ 
        fill: ["rgba(var(--primary-rgb), 0)", "rgba(var(--primary-rgb), 0.2)", "rgba(var(--primary-rgb), 0)"] 
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle 
      cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

// --- Technology Icons ---

export const ReactIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.circle 
      cx="12" cy="12" r="2" fill="currentColor"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.ellipse 
      cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    <motion.ellipse 
      cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"
      animate={{ rotate: 420 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    <motion.ellipse 
      cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"
      animate={{ rotate: 480 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const NextjsIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <motion.path 
      d="M7 17L15 7M15 7V17M15 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ pathLength: [0, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

export const TSIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 7H12M9.5 7V17M14 17C14 17 14.5 15 16.5 15C18.5 15 19 17 19 17M16.5 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const JSIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 14C11 14 10.5 16 8.5 16C6.5 16 6 14 6 14M8.5 8V16M14 17C14 17 14.5 15 16.5 15C18.5 15 19 17 19 17M16.5 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const TailwindIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.path 
      d="M12.001 6C16.001 6 18.001 8 21.001 10.5L19.001 12.5C17.001 10.5 15.001 9 12.001 9C9.001 9 7.001 10.5 5.001 12.5L3.001 10.5C6.001 8 8.001 6 12.001 6Z" 
      fill="currentColor" 
      animate={{ y: [0, -1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path 
      d="M12.001 12C16.001 12 18.001 14 21.001 16.5L19.001 18.5C17.001 16.5 15.001 15 12.001 15C9.001 15 7.001 16.5 5.001 18.5L3.001 16.5C6.001 14 8.001 12 12.001 12Z" 
      fill="currentColor" 
      animate={{ y: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);



export const CodeIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.path 
      d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ x: [-2, 0, -2] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.path 
      d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ x: [2, 0, 2] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
  </svg>
);
