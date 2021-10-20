import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export const ArrowButton = ({ dir = 'right', ...props }) => {
    return (
        <button className="rounded-full bg-gray-200" {...props}>
            {dir === 'right' ? 
                <ChevronRightIcon className="w-7 h-7" /> : 
                <ChevronLeftIcon className="w-7 h-7" />
            }
        </button>
    )
}