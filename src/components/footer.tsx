import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#262626] w-full px-4 py-14 lg:px-28 text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-6">
        <div className="mb-4 lg:mb-0">
          <Image src="/images/icon-header.svg" alt="Logo" width={32} height={32} />
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-base text-[#c9c9c9] mb-4 lg:mb-0">
          <Link href="/">Home</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/desenvolvimento">Desenvolvimento</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/time">Time</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <div className="flex gap-4">
          {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="p-3 border border-[#262626] rounded-md"
            >
              <Icon className="text-white w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>

      <hr className="border-[#262626] my-8" />

      <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-[#c9c9c9]">
        <div className="flex items-center gap-2 mb-2 lg:mb-0">
          <MdOutlineEmail className="text-white w-4 h-4" />
          <span className="border-b border-[#262626] pb-1">
            contact@raryservice.com
          </span>
        </div>

        <span>© {currentYear} RARY Service. Marca registrada.</span>
      </div>
    </footer>
  );
}
