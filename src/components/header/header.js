
//libraries
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

//styles
import { FooterWrapper, FooterWrapperMobile, HeaderWrapper } from "../../styles";

//components
import MainIcon from '../../images/home-icon.svg';
import InjectionIcon from '../../images/injection-icon.png';
import PillIcon from '../../images/pill-icon.png';
import SettingIcon from '../../images/settings-icon.svg';
import AccountIcon from '../../images/account-icon.svg';
import MenuIcon from '../../images/menu-icon.svg';

const Header = () => {

    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Main';
            case '/vaccines':
                return 'Vaccines';
            case '/treatments':
                return 'Treatments';
            case '/settings':
                return 'Settings';
            default:
                return '';
        }
    }

    return (
        <>
            <HeaderWrapper>
                <img src={MenuIcon} alt=''/>
                <h2>{getTitle()}</h2>
                <img src={AccountIcon} alt=''/>
            </HeaderWrapper>
            <FooterWrapper >        
                <NavLink to='/'>Main</NavLink>
                <NavLink to='/vaccines'>Vaccines</NavLink>
                <NavLink to='/treatments'>Treatments</NavLink>
                <NavLink to='/settings'>Add</NavLink>
            </FooterWrapper>            
            <FooterWrapperMobile >
                <NavLink to='/'><img src={MainIcon} alt=''/></NavLink>
                <NavLink to='/vaccines'><img src={InjectionIcon} alt=''/></NavLink>
                <NavLink to='/treatments'><img src={PillIcon} alt=''/></NavLink>
                <NavLink to='/settings'><img src={SettingIcon} alt=''/></NavLink>
            </FooterWrapperMobile>
            
            <Outlet />
        </>
        
    )
}

export default Header;