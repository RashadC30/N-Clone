import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import useCurrentUser from "y/hooks/useCurrentUsers"

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter()
    const { data: user } = useCurrentUser()

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-yellow-500 text-center">Who is Watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-yellow-400 overflow-hidden">
                                <img src="/images/default-luffy.png" alt="profile-logo" />
                            </div>
                            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-yellow-500">
                                {user?.name}
                            </div>
                        </div>
                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-yellow-400 overflow-hidden">
                                <img src="/images/default-Zoro.png" alt="profile-logo-2" />
                            </div>
                            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-yellow-500">
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles