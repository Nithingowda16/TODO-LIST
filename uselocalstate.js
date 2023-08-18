import { useState } from "react";

// custom hook to sync a state hook to the local storage
function useLocalState() {
    // if the local storage is initially empty, use [] as the initial state
    const initialStorage = localStorage.getItem("todoStorage");
    const initialState = initialStorage ? JSON.parse(initialStorage) : [];

    // when creating the state, extract the data from the local storage
    const [state, setState] = useState(initialState);

    // function to set the new local state
    function setLocalState(newState) {
        localStorage.setItem("todoStorage", JSON.stringify(newState));
        setState(newState);
    }

    return [state, setLocalState];
}

export default useLocalState;
