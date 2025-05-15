"use client";

import { Logo } from "../../shared/Logo";
import NavLinks from "./NavLinks";
import ContactButton from "./ContactButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { useMobileMenu } from "./hooks/useMobileMenu";

export default function Navbar() {
  const { open, openMenu, closeMenu } = useMobileMenu();

  return (
    <header className="w-full border-b bg-[#1A1A1A]">
      <nav className="max-w-full mx-auto flex items-center justify-between px-4 py-3">
        <div className="ml-10">
          <Logo />
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <NavLinks />
        </div>
        <div className="hidden lg:block mr-10">
          <ContactButton />
        </div>
        <div className="lg:hidden">
          <MobileMenuButton onClick={openMenu} />
        </div>
      </nav>
      <MobileMenu open={open} onClose={closeMenu} />
    </header>
  );
}
