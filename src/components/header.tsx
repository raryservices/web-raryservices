"use client";

import Image from "next/image";
import { NavLink } from "./nav-link";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import NavItem, { NavItemInterface } from "./navitem/page";
import {
  CircleEllipsis,
  BookOpen,
  Wifi,
  MessagesSquare,
  LogOut,
  User,
  KeyRound,
  UserPlus,
} from "lucide-react";
import "./header.css";

export function Header() {
  const items: NavItemInterface[] = [
    { url: "/", label: "Serviços" },
    { url: "/", label: "Projetos" },
    { url: "/", label: "Desenvolvimento" },
    { url: "/", label: "Sobre" },
    { url: "/", label: "Equipe" },
  ];

  return (
    <header className="w-full fixed left-1/2 transform -translate-x-1/2 z-40 flex items-center px-4 h-20 border-b border-[#262626] sm:px-6 bg-[#0a0a0afa]">
      {/* Logo */}
      <div className="flex-shrink-0 ml-28">
        <Link href="/">
          <Image
            src="/images/icon-header.svg"
            alt="Rary Logo"
            width={32}
            height={32}
            priority
          />
        </Link>
      </div>

      <ul className="hidden sm:flex flex-grow justify-center space-x-10 fixed left-1/2 -translate-x-1/2 text-[#c9c9c9] font-medium text-sm">
        {items.map((item, index) => (
          <NavItem key={index} url={item.url} label={item.label} />
        ))}
      </ul>

      {/* Botão Contato Desktop */}
      <div className="hidden sm:flex ml-auto mr-28">
        <button className="w-[100px] h-[45px] rounded-md text-[#0a0a0a] bg-[#c9c9c9] text-sm font-medium hover:bg-[#adadad] transition-all">
          Contato
        </button>
      </div>
    </header>
  );
}
