import cn from 'classnames'

export const Pill = ({ color = "green", ...props }) => {
    return (
        <div 
            {...props}
            className={cn(
                "ml-3 px-3 border rounded-full w-26",
                classByColor[color],
                props.className
            )}
        />
    )
}

const classByColor = {
    green: "bg-green-700 text-white hover:bg-green-800",
    gray: "bg-gray-100 text-gray-800 hover:bg-gray-200",

}