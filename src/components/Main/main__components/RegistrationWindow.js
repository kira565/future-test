import React from 'react'
import Calendar from "../../../etc/svg/Calendar";
import GroupCup from "../../../etc/svg/GroupCup";
import stars from "../../../etc/img/Group 8.3.png";

const RegistrationWindow = (props) => {

    const handleRegister = (isOpen) => {
        props.openModal(isOpen);
    };

    return (
        <div className="main__registration">
            <span className="title">Доступная съемка <br/> в ближайшее время</span>
            <div className="row">
                <div className="col-md-8">
                    <div className="registration">
                        <div className="wrapper__row row1">
                            <div className="header">
                                <span>Пятница, 14 сентября</span>
                                <div className="calendar-wrapper"><Calendar/></div>
                            </div>
                        </div>
                        <div className="wrapper__row row2">
                            <div className="info">
                                <div className="info__time">15:00 - 18:00</div>
                                <div className="info__price">1500₽</div>
                                <div className="info__place">Осталось — 1 место</div>
                            </div>
                            <div className="button">
                                <button onClick={() => {
                                    handleRegister(true)
                                }} className="btn-register">Выбрать
                                </button>
                            </div>
                        </div>
                        <div className="wrapper__row row3">
                            <div className="info">
                                <div className="info__time">19:00 - 22:00</div>
                                <div className="info__price">1500₽</div>
                                <div className="info__place">Осталось — 1 место</div>
                            </div>
                            <div className="button">
                                <button onClick={() => {
                                    handleRegister(true)
                                }} className="btn-register">Выбрать
                                </button>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="cup-wrapper"><GroupCup/></div>
                            <div className="desc-wrapper">
                                <div className="text">Более <span>50</span> отзывов с оценкой</div>
                                <div className="star-wrapper"><img src={stars}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegistrationWindow