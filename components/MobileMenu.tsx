import React from "react";

interface MobileMenuProps {
    visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) {
        return null
    }

    return (
        <div className="bg-black w-56 align-baseline top-6 left-0 py-5 flex-col border-2 border-gray-700 flex">
            <div className="flex flex-col gap-4">
                <div className="px-3 text-center text-yellow-500 hover:underline">
                    Home
                </div>
                <div className="px-3 text-center text-yellow-500 hover:underline">
                    Series
                </div>
                <div className="px-3 text-center text-yellow-500 hover:underline">
                    Movies
                </div>
                <div className="px-3 text-center text-yellow-500 hover:underline">
                    New & Popular
                </div>
                <div className="px-3 text-center text-yellow-500 hover:underline">
                    My List
                </div>
                <div className="px-3 text-center text-yellow-500 hover:underline">
                    Browse By Language
                </div>
            </div>
        </div>
    )
}

export default MobileMenu