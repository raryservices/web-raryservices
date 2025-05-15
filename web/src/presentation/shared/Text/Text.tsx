import { cn } from "@/lib/utils";
import { ITextProps } from "./@types";

export function Text({ children, className, ...rest }: ITextProps) {
  return (
    <p
      className={cn("text-lg font-main font-normal text-[#E6E6E6]", className)}
      {...rest}
    >
      {children}
    </p>
  );
}
