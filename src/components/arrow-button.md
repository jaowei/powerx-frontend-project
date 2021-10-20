```jsx
<ArrowButton dir='left' />
```

```jsx
<ArrowButton dir='right' />
```

```jsx
const Demo = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div className="flex flex-col justify-center">
            <span className="flex border-2 w-8 h-8 justify-center mb-3">
                {value}
            </span>
            <div classname="flex-none">
                <ArrowButton dir='left' onClick={() => setValue(value - 1)} />
                <ArrowButton dir='right' onClick={() => setValue(value + 1)} />
            </div>

        </div>
    );
};

<Demo />;
```