import { DrinkList } from './DrinkList';

import { TextInput } from "./ui/TextInput";
export const DrinkSearch = ({clickFn}) => {
    return (
        <>
        <label>Search for drinks:</label>
        <TextInput />
        <DrinkList clickFn={clickFn} />
        </>
    );      
};