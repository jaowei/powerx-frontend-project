import { useParams } from "react-router-dom";
import { GameDetails } from "domains/games";

export const GameDetailsPage = () => {
    const params = useParams()

    return (
        <GameDetails gameId={params.gameId} />
    )
}