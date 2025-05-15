import { HTMLAttributes, ReactNode } from "react";

export interface ISubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}