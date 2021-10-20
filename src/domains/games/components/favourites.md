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

<BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <Favourites />
    </QueryClientProvider>
</BrowserRouter>
```