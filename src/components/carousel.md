Variation 1: With rating and game names
```jsx
import { BrowserRouter } from 'react-router-dom'
import { Carousel } from 'components/carousel'

const Demo = () => {
    data = {
        results: [
            {
                id: 1,
                image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80',
                name: 'Example image 1',
                rating: 4.8,
                topRating: 5,
            },
            {
                id: 2,
                image:'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                name: 'Example image 2',
                rating: 4.5,
                topRating: 5,
            },
            {
                id: 3,
                image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                name: 'Example image 3',
                rating: 3.8,
                topRating: 5,
            }
        ]
    }

    return (
        <div>
            <BrowserRouter>
                <Carousel 
                    id={[data.results[0].id, data.results[1].id, data.results[2].id]}
                    image={[data.results[0].image, data.results[1].image, data.results[2].image]}
                    name={[data.results[0].name, data.results[1].name, data.results[2].name]}
                    rating={[data.results[0].rating, data.results[1].rating, data.results[2].rating]}
                    topRating={[data.results[0].topRating, data.results[1].topRating, data.results[2].topRating]}
                    arr={data.results}
                />
            </BrowserRouter>
        </div>
    )
}

<Demo />
```
Variation 2: to be used to display images only
```jsx
import { BrowserRouter } from 'react-router-dom'
import { Carousel } from 'components/carousel'

const Demo = () => {
    data = {
        results: [
            {
                image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80',
            },
            {
                image:'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
            },
            {
                image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
            }
        ]
    }

    return (
        <div>
            <BrowserRouter>
                <Carousel 
                    image={[data.results[0].image, data.results[1].image, data.results[2].image]}
                    arr={data.results}
                />
            </BrowserRouter>
        </div>
    )
}

<Demo />
```