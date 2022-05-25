import React, { useCallback, useRef, useState } from 'react';
import {useLocalStore, useObserver} from "mobx-react";
import "./style.css";

const UploadSet = () => {
    const state = useLocalStore(() => ({
        files: [],
        fileName: '',
        isDragging: false,
        profileImg: require("./icon.png")
    }));

    const imageHandler = useCallback((e) => {
        console.log('ImageHandler');

        console.log("files = " ,e.target.files);

        state.files = e.target.files;
        console.log("saved = ", state.files);
    },[]);
    return useObserver(() => (
        <div className="page">
            <div className="container">
                <h1 className="heading">Add your Image</h1>
                <div className="img-holder">
                    <img src={state.profileImg} alt="" id="img" className="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="input" multiple onChange={imageHandler} />
                <div className="label">
                    <label className="image-upload" htmlFor="input">
                        Choose your Photo
                    </label>
                </div>
            </div>
        </div>
    ));
}

export default UploadSet;
