import { useQuery } from "react-query";
import { getGenres } from "../genres.service";

export const useGenres = (pageSize) => {
    const query = useQuery(["genres", pageSize], () => getGenres(1,pageSize,"name"), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return {
        ...query
    }
}