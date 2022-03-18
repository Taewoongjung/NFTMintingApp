import React, {useCallback, useRef} from 'react';
import {useLocalStore, useObserver} from "mobx-react";
import "./style.css";

const MainBoard = () => {
    const state = useLocalStore(() => ({
        file: [],
        fileName: '',
        isDragging: false,
        profileImg: require("./icon.png")
    }));

    const imageHandler = useCallback((e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                state.profileImg = reader.result
            }
        }
        reader.readAsDataURL(e.target.files[0])
    },[]);
    return useObserver(() => (
        <div className="page">
            <div className="container">
                <h1 className="heading">Add your Image</h1>
                <div className="img-holder">
                    <img src={state.profileImg} alt="" id="img" className="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                <div className="label">
                    <label className="image-upload" htmlFor="input">
                        Choose your Photo
                    </label>
                </div>
            </div>
        </div>
    ));
}

export default MainBoard;