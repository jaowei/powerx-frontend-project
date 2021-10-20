```jsx
import { BrowserRouter } from 'react-router-dom';

const Demo = () => {
    data = {
        results: [
            {
                id: 1,
                image_background:'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80',
                name: 'Action',
                slug: 'action',
            },
            {
                id: 2,
                image_background:'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                name: 'Indie',
                slug: 'indie',
            },
            {
                id: 3,
                image_background:'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                name: 'Shooter',
                slug: 'shooter',
            }
        ]
    }

    return (
        <BrowserRouter>
            <GenreBlock data={data}/>
        </BrowserRouter>
    )
}

<Demo />
```