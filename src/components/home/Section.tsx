import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Softer band background */
  variant?: "default" | "muted";
  /** Enable scroll reveal */
  reveal?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
  reveal = true,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(() => !reveal);

  useEffect(() => {
    if (!reveal) {
      setVisible(true);
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);

  const bg =
    variant === "muted"
      ? "bg-sage-50/80 border-y border-sage-200/70"
      : "bg-transparent";

  return (
    <section
      ref={ref}
      id={id}
      className={`${bg} ${className} ${
        reveal ? `reveal-section ${visible ? "is-visible" : ""}` : ""
      }`}
    >
      {children}
    </section>
  );
}
