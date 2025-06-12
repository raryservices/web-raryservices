'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export type NavLinkProps = LinkProps & {
  children: ReactNode
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathName = usePathname()

  const isActive = pathName === props.href

  return (
    <Link
      className={`flex items-center gap-1.5 text-sm font-medium ${isActive ? 'text-accent-foreground hover:text-muted' : 'text-muted-foreground'} hover:text-muted transition-colors`}
      {...props}
    >
      {children}
    </Link>
  )
}
