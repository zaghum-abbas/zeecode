import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  target, 
  duration = 2000, 
  suffix = "", 
  prefix = "", 
  delay = 0,
  className = ""
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${target}-${delay}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, delay, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const increment = target / (duration / 16);
      let current = 0;

      const animate = () => {
        current += increment;
        if (current < target) {
          setCount(Math.floor(current));
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, duration, delay]);

  return (
    <span 
      id={`counter-${target}-${delay}`}
      className={`inline-block transform transition-all duration-300 ${className}`}
    >
      {prefix}{count}{suffix}
    </span>
  );
};