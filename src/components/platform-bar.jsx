import { FaWindows, FaPlaystation, FaXbox, FaAndroid, FaApple, FaLinux } from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'

const platformMapping = {
    pc: <FaWindows/>,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    ios: <FaApple />,
    Android: <FaAndroid/>,
    mac: <FaApple/>,
    linux: <FaLinux/>,
    nintendo: <SiNintendoswitch/>,
}

export const PlatformBar = ({ data }) => {
    return (
        <div className="flex flex-row gap-3">
            {data.map((obj) => (
                <div key={obj.platform.id}>
                    {platformMapping[`${obj.platform.slug}`]}
                </div> 
            ))}
        </div>
    )
}