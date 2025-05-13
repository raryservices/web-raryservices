import { Link2 } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center space-x-2 text-[1.7rem] font-bold tracking-tight">
      <Link2 className="w-6 h-6 text-violet-600" />
      <span className="text-gray-900 dark:text-white">Rary</span>
      <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent font-extrabold">
        Services
      </span>
    </div>
  );
}
