import { GamesListing } from "../domains/games"
import { useParams } from "react-router-dom";

export const GamesListingPage = () => {
    const params = useParams()

    return <GamesListing genre={params.genre} />;
}