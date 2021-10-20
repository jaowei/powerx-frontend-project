```jsx
import { PlatformBar } from 'components/platform-bar'

const Demo = () => {
    data = {
        id: 1,
        image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
        publishers: ['Publisher Name'],
        developers: ['Developer Name'],
        released: '2021-01-01',
        playtime: 80,
        parentPlatforms: [
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
    }

    return (
        <SidePanel 
            image={data.image}
            publishers={data.publishers}
            developers={data.developers}
            released={data.released}
            playtime={data.playtime}
            parentPlatforms={data.parentPlatforms}
        />
    )
}

<Demo />
```