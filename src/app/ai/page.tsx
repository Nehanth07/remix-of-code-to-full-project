"use client";

import React, { useRef } from "react";
import { Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AIPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-[60vh]">
      <section className="relative overflow-hidden">
        {/* Parallax hero background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/10 via-white/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-white grid place-items-center">
              <Brain className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Solutions</h1>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 text-lg max-w-3xl"
          >
            Building responsible, production-grade AI systems that transform products and operations.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {(["Computer Vision", "NLP Platforms", "MLOps & Data"] as const).map((title, index) => (
          <motion.div
            key={title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 text-slate-700">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  End-to-end solution design, model training, evaluation, and deployment pipelines with robust monitoring.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </div>
  );
}