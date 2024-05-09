import {useState} from "react";
import IState from "../model/IStateModel";

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

export default useToggle;