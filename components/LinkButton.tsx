import { Link } from "react-scroll"
import { ReactNode } from "react"

export interface LinkButtonProps {
    to: string
    children: ReactNode
    onClick?: () => void
}

export default function LinkButton({ to, children, onClick }: LinkButtonProps) {
    return (
        <li className="p-2 relative group hover:text-blue-400">
            <Link to={to} smooth={true} duration={300} className={"cursor-pointer"} onClick={onClick}>
                {children}
            </Link>
            <span className="absolute bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full duration-300" />
        </li>
    )
}
