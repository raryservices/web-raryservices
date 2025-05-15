import { cn } from "@/lib/utils";
import { IIconContainerProps } from "./@types";

export function IconContainer({
  icon,
  className,
  ...rest
}: IIconContainerProps) {
  return (
    <div
      className={cn(
        "w-fit h-fit flex items-start p-6 gap-2.5 border border-solid border-[#262626] rounded-xl",
        "bg-[linear-gradient(131deg,rgba(157,255,0,0.6)-66.81%,rgba(158,255,0,0.00)40.19%)]",
        className
      )}
      {...rest}
    >
      {icon}
    </div>
  );
}
