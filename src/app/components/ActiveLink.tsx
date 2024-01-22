'use client';
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const pathName = usePathname()
  const isActive = pathName == href.toString()

  return (
    <>
      <Link
        href={href}
        className={`py-5 px-2 ${isActive ?
          'border-b-4 border-primary-purple text-primary-purple' : ''}`}
        {...rest}
      >
        {children}
      </Link>
    </>
  )
}