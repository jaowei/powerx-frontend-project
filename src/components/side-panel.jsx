import { PlatformBar } from "./platform-bar"

export const SidePanel = (props) => {
    return (
        <div className="bg-gray-200 py-3 px-3 border rounded-lg sticky">
            <ul className="flex flex-col divide-y-2 divide-green-700">
                <li className="py-2">
                    <img src={props.image} alt="" className="border rounded-lg"/>
                </li>
                <li className="py-2">
                    <div className="flex justify-between">
                        <p className="text-green-700 font-semibold">Publisher</p>
                        <div className="flex flex-col">
                            {props.publishers.map((name) => (
                                <p className="text-sm">{name}</p>
                            ))}
                        </div>
                    </div>
                </li>
                <li className="py-2">
                    <div className="flex justify-between">
                        <p className="text-green-700 font-semibold">Developers</p>
                        <div className="flex flex-col">
                            {props.developers.map((name) => (
                                <p className="text-sm">{name}</p>
                            ))}
                        </div>
                    </div>
                </li>
                <li className="py-2">
                    <div className="flex justify-between">
                        <p className="text-green-700 font-semibold">Release Date</p>
                        <p className="text-sm">{props.released}</p>
                    </div>
                </li>
                <li className="py-2">
                    <div className="flex justify-between">
                        <p className="text-green-700 font-semibold">Average Playtime</p>
                        <p className="text-sm">{props.playtime}hrs</p>
                    </div>
                </li>
                <li className="py-2">
                    <div className="flex justify-between">
                        <p className="text-green-700 font-semibold">Platform</p>
                        <PlatformBar data={props.parentPlatforms}/>
                    </div>
                </li>
            </ul>
        </div>
    )
}