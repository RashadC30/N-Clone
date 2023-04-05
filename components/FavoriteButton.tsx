import axios from "axios";
import React, { useCallback, useMemo } from "react";
import useCurrentUser from "y/hooks/useCurrentUsers";
import useFavorites from "y/hooks/useFavorites";
import { BsPlus } from "react-icons/bs"
import { BiCheck } from "react-icons/bi"

interface FavortiteButtonProps {
    movieId: string
}

const FavoriteButton: React.FC<FavortiteButtonProps> = ({movieId}) => {
    const {mutate: mutateFavorites} = useFavorites()
    const {data: currentUser, mutate} = useCurrentUser()

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || []

        return list.includes(movieId)
    }, [currentUser, movieId])

    const toggleFavorites = useCallback(async () => {
        let response

        if (isFavorite) {
            response = await axios.delete("/api/favorite", {data: {movieId}})
        } else {
            response = await axios.post("/api/favorite", {movieId})
        }

        const updatedFavoriteIds = response?.data?.favoriteIds

        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        })

        mutateFavorites()
    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites])

    const Icon = isFavorite ? BiCheck : BsPlus
    return (
        <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            < Icon className="text-white" size={30}/>
        </div>
    )
}


export default FavoriteButton