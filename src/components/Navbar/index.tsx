import React from "react";
import { NavMenuItems } from "../NavMenuItems";
import {Whole, NavItems, NavbarLogo} from "./style";

const Navbar = () => {

    return (
        <Whole>
            <NavItems className="NavbarItems">
                <NavbarLogo className="navbar-logo">React<i className="fab fa-react"></i></NavbarLogo>
                <div className="menu-icon">

                </div>
                <ul>
                    {NavMenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>

                            </li>
                        )
                    })}
                </ul>
            </NavItems>
        </Whole>
    )
};

export default Navbar;