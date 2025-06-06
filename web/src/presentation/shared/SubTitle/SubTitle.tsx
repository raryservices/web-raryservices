import { cn } from "@/lib/utils";
import { ISubTitleProps } from "./@types";

export function SubTitle({ children, className, ...rest }: ISubTitleProps) {
  return (
    <h4
      className={cn("text-[28px] font-main font-medium", className)}
      {...rest}
    >
      {children}
    </h4>
  );
}
