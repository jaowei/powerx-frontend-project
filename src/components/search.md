```jsx
import { useState } from 'react'

const Demo = () => {
    const [searchVal, setSearchVal] = useState('')

    return (
        <div className="flex flex-col gap-4">
            <div>Search Value: {searchVal}</div>
            <SearchBar setSearchVal={setSearchVal}/>
        </div>
    )
}

<Demo />
```