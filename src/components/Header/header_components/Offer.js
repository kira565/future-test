import React from 'react'
import percent from '../../../etc/img/percent.png'


const Offer = (props) => {
    const handleRegister = (isOpen) => {
        props.openModal(isOpen);
    };

    return (
        <div className="header__offer container-fluid">
            <div className="container">
                <div className="col-md-10 col-sm-auto">
                    <div className="title"><span>Эксклюзивная <span style={{color: "#FC9B09"}}>фотосессия</span> при полете <br/> на вертолете</span>
                    </div>
                    <div className="price">
                        <div className="price__text">
                            <span>Стоимость:</span>
                            <span className="sum">1500₽</span>
                        </div>
                        <div className="price__percent"><img src={percent}/></div>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => {
                            handleRegister(true)
                        }} className="btn-offer">Забронировать место
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Offer