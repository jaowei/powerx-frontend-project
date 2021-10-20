```jsx
import { BrowserRouter } from 'react-router-dom';

const Demo = () => {
    data = {
        results: [
            {
                id: 1,
                name: 'Action',
                slug: 'action',
            },
            {
                id: 2,
                name: 'Indie',
                slug: 'indie',
            },
            {
                id: 3,
                name: 'Shooter',
                slug: 'shooter',
            },
            {
                id: 4,
                name: 'MMORPG',
                slug: 'mmorpg',
            },
            {
                id: 5,
                name: 'Simulation',
                slug: 'simulation',
            }
        ]
    }

    return (
        <BrowserRouter>
            <GenreList data={data} currGenre={'action'}/>
        </BrowserRouter>
    )
}

<Demo />
```