"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingAnimation({
  text,
  delay = 0,
  speed = 60,
  showCursorWhenDone = false,
}: {
  text: string;
  delay?: number;
  speed?: number;
  showCursorWhenDone?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(delay === 0);
  const [isDone, setIsDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setDisplayedText("");
          setHasStarted(delay === 0);
          setIsDone(false);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    const timer = setTimeout(() => {
      setHasStarted(true);
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, text, delay, speed]);

  const showCursor = isVisible && hasStarted && (!isDone || showCursorWhenDone);

  return (
    <span ref={ref} className="inline-block relative">
      {displayedText}
      {showCursor && (
        <span
          className="animate-pulse border-r-[3px] border-brand-primary ml-1 h-[1em] inline-block align-middle -mt-1 opacity-70"
          style={{ width: displayedText.length === 0 ? "1px" : "auto" }}>
          &nbsp;
        </span>
      )}
    </span>
  );
}
