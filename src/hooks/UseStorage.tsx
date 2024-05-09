import {useEffect, useState} from "react";

const useStorage = (key: string, initialValue: number) => {
    const getInitialValue = () => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    };
    const [value, setValue] = useState(getInitialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useStorage;

