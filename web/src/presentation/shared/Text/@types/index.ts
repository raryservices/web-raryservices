import { HTMLAttributes, ReactNode } from "react";

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}