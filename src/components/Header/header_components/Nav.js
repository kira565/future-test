import React from 'react'
import Logo from "../../../etc/svg/Logo";
import profile from '../../../etc/img/profile.png'


const Nav = () => {
    return (
        <div className="header__nav container">
            <div className="row">
                <div className="col-4">
                    <div className="svg-logo"><Logo/></div>
                </div>
                <div className="col-2 offset-2 d-md-none d-lg-none d-xl-none"><a href="#">Москва</a></div>
                <div className="col-2 offset-2 d-md-none d-lg-none d-xl-none"><img src={profile}/></div>
                <div className="col-md-3 d-none d-md-block"><span
                    className="tel">Телефон:</span><span>8(800)-123-12-12</span></div>
            </div>
        </div>
    )
};

export default Nav