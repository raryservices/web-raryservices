import { HTMLAttributes, ReactNode } from "react";

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}