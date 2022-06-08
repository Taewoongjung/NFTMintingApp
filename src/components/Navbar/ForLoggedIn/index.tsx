import React, {useCallback} from "react";
import { NavMenuItemsForLoggedIn } from "../../NavMenuItems/ForLoggedIn";
import {Whole, NavItems, NavbarLogo, FaReact, NavMenu, Bar, MenuIcon} from "../style";
import {useLocalStore} from "mobx-react";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import axios from "axios";
import {Redirect} from "react-router-dom";

const NavbarLoggedIn = () => {
    const { data: userData, mutate } = useSWR('http://localhost:3050/api/users', fetcher);
    const state = useLocalStore(() => ({
        clicked: false
    }));
    const handleClick = useCallback((e) => {
        e.preventDefault();
        state.clicked=true;
    },[state.clicked]);
    const onClickLogOut = useCallback((e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3050/api/users/logout',
                null,
                {withCredentials: true}
                )
            .then(() => {
                mutate(false, false);
            })
            .catch(() => {
                // eslint-disable-next-line no-restricted-globals
                return location.reload();
            })
    },[]);

    return (
        <Whole>
            <NavItems className="NavbarItems">
                <NavbarLogo className="navbar-logo"><FaReact className=""><img src={require("../Gameper.png")} style={{ width: 150 }}></img></FaReact></NavbarLogo>
                <MenuIcon className="menu-icon" onClick={handleClick}>
                    <Bar className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></Bar>
                </MenuIcon>
                <NavMenu className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-links-sixth">{userData.name} 님 환영합니다.</li>
                    {NavMenuItemsForLoggedIn.map((item, index) => {
                        if (item.title === 'Logout'){
                            return (
                                <li key={index}>
                                    <a className={item.cName} onClick={onClickLogOut}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        }
                    })}
                </NavMenu>
            </NavItems>
        </Whole>
    )
};

export default NavbarLoggedIn;
