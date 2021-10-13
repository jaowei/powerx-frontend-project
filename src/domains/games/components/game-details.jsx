import { Carousel } from 'components/carousel'
import { SidePanel } from 'components/side-panel'

export const GameDetails = () => {
    return (
        <div className="grid grid-cols-12 gap-1 max-w-7xl mx-auto">
            <div className="col-span-9">
                <div className="w-3/4 mx-auto">
                    <Carousel />
                    <span className="">Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \r\nSimultaneous storytelling from three unique perspectives: \r\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \r\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</span>
                </div>
            </div>
            <div className="col-span-3">
                <SidePanel />
            </div>
        </div>

    )
}