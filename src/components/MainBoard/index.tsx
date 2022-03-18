import React, {useCallback} from 'react';
import {useLocalStore} from "mobx-react";

const MainBoard = () => {
    const state = useLocalStore(() => ({
        file: [],
        fileName: '',

    }));

    const fileSelectedHandler = useCallback((e) => {
        state.file = e.target.files;
        console.log("fileSelectedHandler event = ", e.target.files);
    }, [state.file]);

    const fileUploadHandler = useCallback((e) => {
        console.log("fileUploadHandler event = ", e.target);
        for(let i = 0; i < state.file.length; i++) {
            console.log("index ", i, "pushed = ", state.file[i]);
        }
    }, []);

    return (
        <div>
            <input type="file" onChange={fileSelectedHandler} multiple/>
            <button onClick={fileUploadHandler}>upload</button>
        </div>
    )
}

export default MainBoard;