import { useRouter } from "next/router";
import React from "react";
import {HiPlay} from "react-icons/hi"

interface PlayButtonProps {
    movieId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({movieId}) => {
    const router = useRouter()

    return (
        <button onClick={() => router.push(`/watch/${movieId}`)} className="bg-green-300 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-500 transition">
            <HiPlay className="mr-1" size={30}/>
            Play
        </button>
    )
}

export default PlayButton