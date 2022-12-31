import Link from "next/link";
import { MouseEventHandler } from "react";

export interface LinkButtonProps {
    href: string
    buttonName: string
    onClick?: MouseEventHandler
}

export const LinkButton = (props: LinkButtonProps) => {
    return (
        <li className="p-4 relative group hover:text-blue-400" onClick={props.onClick}>
            <Link href={props.href}>
                {props.buttonName}
            </Link>
            <span className="absolute bottom-0.5 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full duration-300" />
        </li>
    )
}

export default LinkButton;