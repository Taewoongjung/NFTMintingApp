import React, {useState} from 'react';
import {
    Banner,
    BoxEight, BoxEleven, BoxFour, BoxFourteen,
    BoxNine, BoxOne,
    BoxSeven, BoxSix,
    BoxThree, BoxTwelveThirteen,
    BoxTwo, GIFholder, MainContainer
} from "./style";
import UploadSet from "../../components/UploadSet";
import ReactiveButton from "reactive-button";
import {useLocalStore, useObserver} from "mobx-react";
import NavbarNotLoggedIn from "../../components/Navbar/ForNotLoggedIn";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import NavbarLoggedIn from "../../components/Navbar/ForLoggedIn";

const Main = () => {
    const getState = useLocalStore(() => ({
        file: [],
        fileName: '',
        isDragging: false,
        profileImg: require("./desolazione_empty_1.gif"),
        bannerImg: require("./talket_transparent.png")
    }));
    const { data: userData, mutate } = useSWR('http://localhost:3050/api/users', fetcher);

    const [state, setState] = useState('idle');
    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    };
    console.log("Main = ", userData);

    return useObserver(() => (
        <div className="App">
            {userData ? <NavbarLoggedIn /> : <NavbarNotLoggedIn />}
            <MainContainer>
                <BoxOne>
                    <UploadSet />
                </BoxOne>
                <BoxTwo>
                    <UploadSet />
                </BoxTwo>
                <BoxThree>
                    <UploadSet />
                </BoxThree>
                <BoxFour>
                    <UploadSet />
                </BoxFour>
                <BoxSix>
                    <UploadSet />
                </BoxSix>
                <BoxSeven>
                    <UploadSet />
                </BoxSeven>
                <BoxEight>
                    <UploadSet />
                </BoxEight>
                <BoxNine>
                    <UploadSet />
                </BoxNine>
                <BoxEleven>
                    <ReactiveButton
                        buttonState={state}
                        onClick={onClickHandler}
                        color={'primary'}
                        idleText={'Generate'}
                        loadingText={'Loading'}
                        successText={'Success'}
                        errorText={'Error'}
                        type={'button'}
                        className={'class1 class2'}
                        style={{ borderRadius: '15px' }}
                        size={'normal'}
                        block={false}
                        messageDuration={2000}
                        buttonRef={null}
                        width={'200px'}
                        height={'70px'}
                        animation={true}
                    />
                    <ReactiveButton
                        buttonState={state}
                        onClick={onClickHandler}
                        color={'red'}
                        idleText={'Mint'}
                        loadingText={'Loading'}
                        successText={'Success'}
                        errorText={'Error'}
                        type={'button'}
                        className={'class1 class2'}
                        style={{ borderRadius: '15px', marginLeft:12 }}
                        size={'normal'}
                        block={false}
                        messageDuration={2000}
                        buttonRef={null}
                        width={'200px'}
                        height={'70px'}
                        animation={true}
                    />
                </BoxEleven>
                <BoxTwelveThirteen>
                    <GIFholder className="img-holder">
                        <img src={getState.profileImg} alt="" id="img" className="img" />
                    </GIFholder>
                </BoxTwelveThirteen>
                <BoxFourteen>
                    <Banner>
                        <img src={getState.bannerImg} alt="" id="img" className="img" />
                    </Banner>
                </BoxFourteen>
            </MainContainer>
        </div>
    ));
};

export default Main;
