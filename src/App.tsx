import React, { useState} from "react";

interface IState {
    value: boolean;
}

const useToggle = (): [boolean, () => void, () => void] => {
    const [changer, setChanger] = useState<IState>({ value: false });

    const True = () => {
        setChanger({ value: true });
    };

    const False = () => {
        setChanger({ value: false });
    };

    return [changer.value, True, False];
};


const App = () => {
    const [value, True, False] = useToggle();

    return (
        <div>
            <h2>{value.toString()}</h2>
            <button onClick={True}>True</button>
            <button onClick={False}>False</button>
        </div>
    );
};


export default App;
