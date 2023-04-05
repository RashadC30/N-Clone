import React from "react"

interface NavbarItemProps {
    label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({label}) => {
    return (
    <div className="text-yellow-500 cursor-pointer hover:text-gray-500 transition">
        {label}
    </div>
    )
}

export default NavbarItem