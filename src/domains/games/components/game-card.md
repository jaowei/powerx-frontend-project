```jsx
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

const Demo = () => {
    data = [
        {
            platform : {id: 1, slug: 'pc'}
        },
        {
            platform : {id: 2, slug: 'playstation'}
        },
        {
            platform : {id: 3, slug: 'xbox'}
        },
        {
            platform : {id: 4, slug: 'nintendo'}
        }
    ]

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GameCard 
                    gameId={1}
                    image={'https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'}
                    name={'Example Game Name'}
                    metacritic={90}
                    platforms={data}
                />
            </QueryClientProvider>
        </BrowserRouter>
    )
}

<Demo />
```