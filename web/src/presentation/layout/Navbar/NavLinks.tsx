import { Button } from "@/components/ui/button";

const navItems = ["Inicio", "Serviços", "Equipe", "Nosso Processo", "Sobre Nós", "Carreiras"];

export default function NavLinks() {
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item}
          variant={item === "Inicio" ? "default" : "ghost"}
          className={
            item === "Inicio"
              ? "bg-[#262626] text-white"
              : "text-gray-400 hover:text-black"
          }
        >
          {item}
        </Button>
      ))}
    </>
  );
}
