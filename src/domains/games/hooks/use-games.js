import { useQuery } from "react-query"
import { getGames, getGamesByGenre, getGameDetails, getGameMedia } from "../games.service"

export const useFeaturedGames = (page, pageSize) => {
    const query = useQuery("Featuredgames", () => getGames(page, pageSize), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return {
        ...query,
    }
}

export const useListedGames = (page, pageSize, genre, search) => {
    const query = useQuery(["Listedgames", genre, search], () => getGamesByGenre(page, pageSize, genre, search), {
        refetchOnWindowFocus: false,
    })

    return {
        ...query,
    }
}

export const useGameDetails = (gameId) => {
    const query = useQuery(["GameDetails", gameId], () => getGameDetails(gameId), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return {
        ...query,
    }
}

export const useGameMedia = (gameId, mediaType) => {
    const query = useQuery(["GameDetails", gameId, mediaType], () => getGameMedia(gameId, mediaType), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return {
        ...query,
    }
}