'use client';

import Image from 'next/image';
import HeroImage from '@/public/Hero Section.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src={HeroImage}
        alt="Mountains"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay escuro leve */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Conteúdo */}
      <div className="z-20 text-center px-4 flex flex-col items-center gap-8">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          A Digital Product Studio <br className="hidden md:block" /> that will Work
        </h1>

        <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl flex flex-wrap items-center gap-2 text-sm md:text-base">
          <span className="text-white/70">For</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-md">Startups</span>
          <span>,</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-md">Enterprise leaders</span>
          <span>,</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-md">Media & Publishers</span>
          <span>and</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-md">Social Good</span>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="bg-zinc-900 text-white px-6 py-2 rounded-md hover:bg-zinc-800 transition">
            Our Works
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
