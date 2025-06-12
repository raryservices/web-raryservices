"use client";

import { ServiceButton } from "@/components/buttons/ServiceButton";
import { ContactButton } from "@/components/buttons/ContactButton";

export default function Home() {
  return (
    <section className="flex flex-col gap-2 w-full my-24">
      <div className="flex justify-center items-center">
        <div className="relative w-[100rem] border border-[#262626] h-[35rem] overflow-hidden">
          {/* Imagem de fundo */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/BG-Home.png')" }}
          ></div>

          <div className="absolute inset-0 bg-background opacity-50 z-0"></div>

          <h1 className="relative z-10 text-center font-bold text-5xl text-[#c9c9c9] mt-32">
            RARY SERVICE
          </h1>

          <div className="mt-12 relative z-10 w-[40rem] h-20 bg-[#0F0F0F] rounded-md border-[#262626] border mx-auto flex items-center justify-center gap-2 px-4 overflow-x-auto">
            <div className="bg-[#1a1a1a] text-[#c9c9c9] px-4 py-2 rounded-md text-md">
              Dev. Website
            </div>
            <span className="text-[#c9c9c9] text-sm">,</span>
            <div className="bg-[#1a1a1a] text-[#c9c9c9] px-4 py-2 rounded-md text-md">
              Dev. Software & Mobile
            </div>
            <span className="text-[#c9c9c9] text-sm">,</span>
            <div className="bg-[#1a1a1a] text-[#c9c9c9] px-4 py-2 rounded-md text-md">
              Dev. Dados
            </div>
            <span className="text-[#c9c9c9] text-sm">e</span>
            <div className="bg-[#1a1a1a] text-[#c9c9c9] px-4 py-2 rounded-md text-md">
              Design UI/UX
            </div>
          </div>
          <div className="relative z-10 flex justify-center gap-4 mt-8">
            <ServiceButton />
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}
