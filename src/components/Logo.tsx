import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  showText = true,
  className,
}) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {/* Logo Icon */}
      <div className={sizeClasses[size]}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#EC4899", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
          <path
            d="M12 12 L28 12 L28 16 L18 16 L18 20 L26 20 L26 24 L12 24 Z"
            fill="white"
          />
          <path
            d="M8 14 L6 16 L8 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M32 14 L34 16 L32 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="14" cy="28" r="1.5" fill="white" opacity="0.7" />
          <circle cx="20" cy="28" r="1.5" fill="white" opacity="0.7" />
          <circle cx="26" cy="28" r="1.5" fill="white" opacity="0.7" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className={cn(
            "font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
            textSizeClasses[size]
          )}
        >
          Zeecode
        </span>
      )}
    </div>
  );
};

export default Logo;
