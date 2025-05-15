import { HTMLAttributes, ReactNode } from "react";

export interface IIconContainerProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  className?: string;
}
  