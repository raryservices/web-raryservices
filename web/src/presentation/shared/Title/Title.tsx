import { cn } from "@/lib/utils";
import { ITitleProps } from "./@types";

export function Title({ children, className, ...rest }: ITitleProps) {
  return (
    <h2 className={cn("text-5xl font-main font-semibold", className)} {...rest}>
      {children}
    </h2>
  );
}
