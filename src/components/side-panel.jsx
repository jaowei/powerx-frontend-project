export const SidePanel = () => {
    return (
        <div>
            <ul>
                <li>
                    <img src="https://media.rawg.io/media/games/d1c/d1c676bd2b8b9d909ccaefb15b8554f5.jpg" alt="" />
                    <div className="flex justify-between">
                        <p className="">Publisher</p>
                        <p className="">publishers.name</p>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between">
                        <p className="">Developers</p>
                        <p className="">developers.name</p>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between">
                        <p className="">Release Date</p>
                        <p className="">released</p>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between">
                        <p className="">Average Playtime</p>
                        <p className="">playtime</p>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between">
                        <p className="">Platform</p>
                        <p className="">parents_platforms.name</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}