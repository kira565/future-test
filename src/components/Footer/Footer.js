import React from 'react'
import Logo from "../../etc/svg/Logo";
import mc from "../../etc/img/MC.png";
import visa from "../../etc/img/VISA.png";
import ru from "../../etc/img/RU.png"
import arrow from "../../etc/img/2arrow.png"
import vk from "../../etc/img/vk.png"
import fb from "../../etc/img/Facebook.png"
import inst from "../../etc/img/Instragram.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__first-block">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-2">
                            <div className="svg-logo"><Logo/></div>
                        </div>
                        <div className="col-6 col-md-3 offset-md-6 offset-lg-7">
                            <div className="right-icons">
                                <div className="right-icons__social">
                                    <div><img src={vk}/></div>
                                    <div><img src={fb}/></div>
                                    <div><img src={inst}/></div>
                                </div>
                                <div className="right-icons__lang d-none d-md-block">
                                    <img className="ru" src={ru}/><img className="arrow" src={arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer__second-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="payment">
                                    <div className="payment__mc-block"><img src={mc}/></div>
                                    <div className="payment__visa-block"><img src={visa}/></div>
                                    <div className="payment__lang d-md-none d-lg-none d-xl-none">
                                        <img className="ru" src={ru}/><img className="arrow" src={arrow}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="text-block">
                                    <div className="text-block__support">Тех. поддержка: 8(800)700-00-00</div>
                                    <div className="text-block__license">© 2018 HELYFLY. All Rights Reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer