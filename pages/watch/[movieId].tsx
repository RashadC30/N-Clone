import React from "react";
import useMovie from "y/hooks/useMovie";
import { useRouter } from 'next/router';
import { BsArrowLeftSquare } from 'react-icons/bs';

const Watch = () => {
    const router = useRouter()
    const {movieId} = router.query

    const {data} = useMovie(movieId as string)

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-75">
                <BsArrowLeftSquare onClick={() => router.push("/")} className="text-green-300 cursor-pointer " size={45}/>
                <p className="text-yellow-500 text-1xl md:text-3xl font-bold">
                    <span className="font-light">
                        Watching: 
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video src={data?.videoUrl} className="h-full w-full " autoPlay controls/>
        </div>
    )
}

export default Watch