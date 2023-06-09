import React, { useCallback, useEffect, useState } from "react";
import {MdOutlineClose} from "react-icons/md"
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "y/hooks/useInfoModal";
import useMovie from "y/hooks/useMovie";

interface InfoModalProps {
    visible?: boolean
    onClose: any
}

const InfoModal: React.FC<InfoModalProps> = ({visible, onClose}) => {
    const [isVisible, setIsVisible] = useState(!!visible)

    const {movieId} = useInfoModal()
    const {data = {}} = useMovie(movieId)

    useEffect(() => {
        setIsVisible(!!visible)
    }, [visible])

    const handleClose = useCallback(() => {
        setIsVisible(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    if (!visible) {
        return null
    }

    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-75 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isVisible ? "scale-100" : "scale-0"} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>

                    <div className="realtive h-96">
                        <video className="w-full brightness-[60%] object-cover h-full" autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl}></video>
                        <div onClick={handleClose} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
                            < MdOutlineClose className="text-green-300 w-6" size={25}/>
                        </div>
                        <div className="absolute bottom-[10%] left-10 mb-40">
                            <p className="text-yellow-500 text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                                {data?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>
                        </div>
                    </div>

                    <div className="px-12 py-8">
                        <div className="flex flex-row items-center gap-2 mb-8">
                            <p className="text-green-300 font-semibold text-lg">
                                New
                            </p>
                            <p className="text-yellow-500 text-lg">
                                {data?.duration}
                            </p>
                            <p className="text-yellow-500 text-lg">
                                {data?.genre}
                            </p>
                        </div>
                        <p className="text-yellow-500 text-lg">
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal