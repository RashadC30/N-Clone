import { signOut } from "next-auth/react"
import React from "react"
import useCurrentUser from "y/hooks/useCurrentUsers"

interface AccountsMenuProps {
    visible?: boolean
}

const AccountsMenu: React.FC<AccountsMenuProps> = ({visible}) => {
   
    const {data} = useCurrentUser()
    
    if (!visible) {
        return null
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-700 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
                    <img src="/images/default-luffy.png" alt="profile-Logo" className="w-8 rounded-md"/>
                    <p className="text-yellow-500 text-sm group-hover/item:underline">
                        {data?.name}
                    </p>
                </div>
                <hr className="bg-green-300 border-0 h-px my-4"/>
                <div onClick={() => signOut} className="px-3 text-center text-yellow-500 text-sm hover:underline">
                    Sign Out
                </div>
            </div>
        </div>
    )
}

export default AccountsMenu