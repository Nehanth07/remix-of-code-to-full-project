import React from "react";
import { ReadingClient } from "./reading-client";

export const metadata = {
  title: "Reading | Nexus Corp",
  description: "Scroll-driven reading highlight and CTA",
};

export default function ReadingPage() {
  return (
    <div className="min-h-[200vh] bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Scroll Reading</h1>
        <p className="text-slate-600 mb-12">
          Experience a subtle reading highlight that progresses as you scroll. Reach the end to reveal a call to action.
        </p>
        <ReadingClient />
      </section>
    </div>
  );
}