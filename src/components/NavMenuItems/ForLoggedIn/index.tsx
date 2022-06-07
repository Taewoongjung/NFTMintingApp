import "../style.css"
import {userStore} from "../../../state_manager/store";

export const NavMenuItemsForNotLoggedIn = [
    {
        title: 'Home',
        url: '#',
        cName: 'nav-links-fir'
    },
    {
        title: 'Service',
        url: '#',
        cName: 'nav-links-sec'
    },
    {
        title: 'Products',
        url: '#',
        cName: 'nav-links-third'
    },
    {
        title: 'Contact Us',
        url: '#',
        cName: 'nav-links-fourth'
    },
    {
        title: 'Login',
        url: 'http://localhost:3000/login',
        cName: 'nav-links-fifth'
    }
]
