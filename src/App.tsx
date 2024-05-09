import React, {FC, useEffect, useRef, useState} from "react";

import usePrevious from "./hooks/UsePrevious";
import useToggle from "./hooks/UseToggle";
import useStorage from "./hooks/UseStorage";


const CounterComponent: React.FC = () => {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return(
        <div>
            <h2>Current count: {count}</h2>
            <h2>Previous count: {previousCount}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

const StorageComponent = () => {
    const [counter, setCounter] = useStorage('counter', 0);

    const increment = () => setCounter((prevCouner: number) => prevCouner +1);
    const decrement = () => setCounter((prevCounter: number) => prevCounter -1);

    return (
        <div>
            <h2>Counter: {counter}</h2>

            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Remove</button>
        </div>
    );
};







const App: FC = () => {

    const [value, True, False] = useToggle();

    return (
        <div>
            <h2>{value.toString()}</h2>
            <button onClick={True}>True</button>
            <button onClick={False}>False</button>
            <CounterComponent/>
            <StorageComponent/>
        </div>
    );
};




export default App;
