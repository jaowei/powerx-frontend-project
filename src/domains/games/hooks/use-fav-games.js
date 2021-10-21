import { useState, useEffect } from 'react'
import { useQueries } from "react-query"
import { getGameDetails } from "../games.service"

const STORAGE_KEY = 'favourites'

export const useFavGames = () => {
    const [favData, setFavData] = useState(() => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favData))
    }, [favData])

    const removeFromFavourites = (targetGameId) => {
        let updatedArr = favData.filter((gameId) => parseInt(gameId) !== parseInt(targetGameId))
        setFavData(updatedArr)
    }

    const query = useQueries(
        favData.map((gameId) => {
            return {
                queryKey: ['favGames', parseInt(gameId)],
                queryFn: () => getGameDetails(parseInt(gameId))
            }
        }),
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }        
    )

    return {
        favData,
        setFavData,
        removeFromFavourites,
        query
    }
}


