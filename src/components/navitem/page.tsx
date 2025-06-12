import Link from "next/link";

export interface NavItemInterface {
  url: string;
  label: string;
  onClick?: () => void;
}

export default function NavItem({ url, label, onClick }: NavItemInterface) {
  return (
    <li>
      <Link
        href={url}
        onClick={onClick}
        className="
          px-2 py-1
          border border-transparent
          rounded-md
          text-[#c9c9c9]
          hover:border-white hover:border-opacity-40
          hover:text-white
          transition-colors duration-200 ease-in-out
          cursor-pointer
          inline-block
        "
      >
        {label}
      </Link>
    </li>
  );
}
