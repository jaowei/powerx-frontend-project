Game platform icon is rendered according to the slug name received
```jsx
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
        <div className="w-32 h-9 bg-blue-100 py-3 px-3 rounded-lg">
            <PlatformBar data={data} />
        </div>
    )
}

<Demo />
``` 