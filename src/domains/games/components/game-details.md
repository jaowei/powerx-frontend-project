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
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GameDetails gameId={3498}/>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

<Demo />
```