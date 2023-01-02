import Link from "next/link"
import { MouseEventHandler, ReactNode } from "react"

import { useSelectedLayoutSegment } from "next/navigation"

export interface LinkButtonProps {
    href: string
    children: ReactNode
    onClick?: MouseEventHandler
}

export default function LinkButton({ href, children, onClick }: LinkButtonProps) {
    let segment = useSelectedLayoutSegment()
    let active = href === `/${segment}`
    return (
        <li className="p-2 relative group hover:text-blue-400" onClick={onClick}>
            <Link className={active ? "text-blue-400 " : ""} href={href}>
                {children}
            </Link>
            <span className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full duration-300" />
        </li>
    )
}
