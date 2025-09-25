"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ReadingClient: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const [progress, setProgress] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
  });

  const text = `At Nexus Corp, innovation isn't a buzzword—it's our operating system. As you scroll, watch this passage illuminate, revealing how every letter, idea, and breakthrough connects to a larger vision. From AI that thinks with you to energy that sustains us all, our mission is simple: build the tools that build tomorrow.`;

  const chars = React.useMemo(() => text.split("").map((ch, i) => ({ ch, i })), [text]);
  const total = chars.length || 1;

  return (
    <div ref={containerRef} className="relative">
      <p className="text-lg md:text-xl leading-8 md:leading-9 text-slate-600">
        {chars.map(({ ch, i }) => {
          const ratio = (i + 1) / total; // 0..1
          const active = progress >= ratio * 0.98; // slight easing so last letters light up near end
          return (
            <span
              key={i}
              className={active ? "text-slate-900" : "text-slate-400"}
              style={{ transition: "color 140ms linear" }}
            >
              {ch}
            </span>
          );
        })}
      </p>

      {/* CTA appears near the end */}
      <div className="h-[60vh]" />
      <AnimatePresence>
        {progress >= 0.99 && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="mt-10"
          >
            <Link href="/#industries">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg">
                Discover Our Innovation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};