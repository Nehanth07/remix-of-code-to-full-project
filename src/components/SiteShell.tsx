"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Building2,
  Heart,
  Brain,
  Plane,
  Banknote,
  Zap,
  Menu,
  X,
  BookOpen
} from "lucide-react";

const navigationItems = [
  { title: "Home", href: "/", icon: Building2 },
  { title: "Reading", href: "/reading", icon: BookOpen },
  { title: "Medical", href: "/medical", icon: Heart },
  { title: "AI Solutions", href: "/ai", icon: Brain },
  { title: "Aerospace", href: "/aerospace", icon: Plane },
  { title: "Fintech", href: "/fintech", icon: Banknote },
  { title: "Energy", href: "/energy", icon: Zap },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <motion.header
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-800 to-slate-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Nexus Corp</h1>
                <p className="text-xs text-slate-500 tracking-wider">INNOVATION REDEFINED</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {navigationItems.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                      active ? "bg-slate-100 text-slate-800" : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        active ? "bg-slate-100 text-slate-800" : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="pt-20">{children}</main>

      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Nexus Corp</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Pioneering innovation across multiple industries, transforming the future through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Industries</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Medical Technology</li>
                <li>Artificial Intelligence</li>
                <li>Aerospace Engineering</li>
                <li>Financial Technology</li>
                <li>Renewable Energy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Contact</h4>
              <p className="text-slate-400">
                1 Innovation Drive
                <br />
                Tech Valley, CA 94043
                <br />
                info@nexuscorp.com
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500">© 2024 Nexus Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}