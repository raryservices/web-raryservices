"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Logo } from "../../shared/Logo";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Side Menu */}
          <motion.aside
            className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm flex flex-col bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl border-l border-white/10 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="text-zinc-300 hover:text-white transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <ul className="space-y-6 text-base font-medium text-zinc-200">
                {[
                  "Inicio",
                  "Serviços",
                  "Equipe",
                  "Nosso Processo",
                  "Sobre Nós",
                  "Carreiras",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={onClose}
                      className="group relative inline-block w-fit text-white transition"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#C9C9C9] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Call to Action */}
            <div className="px-6 pb-6">
              <a
                href="#"
                className="block w-full text-center text-[#262626] font-semibold py-3 rounded-lg bg-gradient-to-r from-[#C9C9C9] to-[#C9C9C9] hover:from-[#C9C9C9] hover:to-[#C9C9C9] transition-all shadow-lg hover:shadow-[#262626]/40"
              >
                Contate-nos
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
