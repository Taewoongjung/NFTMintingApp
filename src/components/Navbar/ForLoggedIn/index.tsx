import React, {useCallback} from "react";
import { NavMenuItemsForLoggedIn } from "../../NavMenuItems/ForLoggedIn";
import {Whole, NavItems, NavbarLogo, FaReact, NavMenu, Bar, MenuIcon} from "../style";
import {useLocalStore} from "mobx-react";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const NavbarLoggedIn = () => {
    const { data: userData } = useSWR('http://localhost:3050/api/users', fetcher);
    const state = useLocalStore(() => ({
        clicked: false
    }));
    const handleClick = useCallback((e) => {
        e.preventDefault();
        state.clicked=true;
    },[state.clicked]);

    return (
        <Whole>
            <NavItems className="NavbarItems">
                <NavbarLogo className="navbar-logo"><FaReact className=""><img src={require("../Gameper.png")} style={{ width: 150 }}></img></FaReact></NavbarLogo>
                <MenuIcon className="menu-icon" onClick={handleClick}>
                    <Bar className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></Bar>
                </MenuIcon>
                <NavMenu className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>{userData.name} 님 환영합니다.</li>
                    {NavMenuItemsForLoggedIn.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </NavMenu>
            </NavItems>
        </Whole>
    )
};

export default NavbarLoggedIn;
