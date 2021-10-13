import { useQuery } from "react-query"
import { getGames, getGamesByGenre } from "../games.service"

export const useFeaturedGames = (page, pageSize) => {
    const query = useQuery("Featuredgames", () => getGames(page, pageSize), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return {
        ...query,
    }
}

export const useListedGames = (page, pageSize, genre) => {
    const query = useQuery(["Listedgames", genre], () => getGamesByGenre(page, pageSize, genre), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return {
        ...query,
    }
}