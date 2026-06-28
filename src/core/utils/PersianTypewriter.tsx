import { useState, useEffect, useRef } from "react";

const words = ["همکاری", "توسعه", "نوآوری", "خلاقیت"];

export function PersianTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayed.length + 1);
        setDisplayed(next);

        if (next === currentWord) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1400);
          return;
        }
        timeoutRef.current = setTimeout(tick, 110);
      } else {
        const next = currentWord.slice(0, displayed.length - 1);
        setDisplayed(next);

        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timeoutRef.current = setTimeout(tick, 300);
          return;
        }
        timeoutRef.current = setTimeout(tick, 60);
      }
    };

    timeoutRef.current = setTimeout(tick, 100);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="min-w-[120px] sm:min-w-[180px] text-right inline-block">
      {displayed}
      <span
        style={{ animation: "blink 1s step-end infinite" }}
        className="opacity-80"
      >
        |
      </span>
    </span>
  );
}