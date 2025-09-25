"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Brain,
  Plane,
  Banknote,
  Zap,
  Users,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  // const containerRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  // const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);

  const industries = [
    { title: "Medical Technology", description: "Revolutionary healthcare solutions and medical devices", icon: Heart, color: "from-red-500 to-pink-500", href: "/medical" },
    { title: "AI Solutions", description: "Cutting-edge artificial intelligence and machine learning", icon: Brain, color: "from-purple-500 to-indigo-500", href: "/ai" },
    { title: "Aerospace", description: "Next-generation aerospace technology and innovation", icon: Plane, color: "from-blue-500 to-cyan-500", href: "/aerospace" },
    { title: "Fintech", description: "Financial technology solutions for the digital age", icon: Banknote, color: "from-green-500 to-emerald-500", href: "/fintech" },
    { title: "Energy Solutions", description: "Sustainable energy and clean technology initiatives", icon: Zap, color: "from-yellow-500 to-orange-500", href: "/energy" },
  ] as const;

  const stats = [
    { icon: Users, label: "Global Employees", value: "25,000+" },
    { icon: Globe, label: "Countries", value: "45" },
    { icon: Award, label: "Patents", value: "1,200+" },
    { icon: TrendingUp, label: "Revenue Growth", value: "35%" },
  ] as const;

  const AboutSection = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.section
        ref={ref}
        className="py-32 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Transforming
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">{" "}Tomorrow{" "}</span>
                Today
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                At Nexus Corp, we don't just adapt to the future—we create it. Our diverse portfolio spans the most dynamic sectors of the global economy, each pushing the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                From life-saving medical devices to revolutionary AI systems, from sustainable energy solutions to cutting-edge aerospace technology, we're building the infrastructure of tomorrow.
              </p>
              <Link href="#industries">
                <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-lg">
                  Discover Our Innovation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={stat.label} initial={{ y: 20, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }} transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}>
                      <Card className="p-6 bg-white/80 backdrop-blur-md border-0 shadow-lg hover:shadow-2xl rounded-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl grid place-items-center">
                              <Icon className="w-6 h-6 text-slate-600" />
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                              <p className="text-sm text-slate-500">{stat.label}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  const IndustriesSection = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.section
        id="industries"
        ref={ref}
        className="py-32 bg-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Our Industries</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Five dynamic sectors, one unified vision: to advance human progress through breakthrough innovation and technological excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div key={industry.title} initial={{ y: 50, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}>
                  <Link href={industry.href} className="block">
                    <Card className="group h-full bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 shadow-lg overflow-hidden rounded-2xl">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl grid place-items-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-700 transition-colors">{industry.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{industry.description}</p>
                        <div className="flex items-center text-slate-700 font-medium">
                          Explore <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] md:h-[75vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/40 via-slate-800/10 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-blue-500/10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Nexus Corp
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700">
              Pioneering innovation across Medical, AI, Aerospace, Fintech, and Energy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#industries"><Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl">Browse Industries</Button></Link>
              <Link href="/ai"><Button variant="outline">See AI Work</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {AboutSection()}
      {IndustriesSection()}
    </div>
  );
}