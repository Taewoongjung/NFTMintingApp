import React from 'react';
import Navbar from "../../components/Navbar";
import { MainContainer } from "./style";
import MainBoard from "../../components/MainBoard";

const Main = () => {
    return (
        <div className="App">
            <Navbar />
            <MainContainer>
                <MainBoard />
            </MainContainer>
        </div>
    )
};

export default Main;
