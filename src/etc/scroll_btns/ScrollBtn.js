import React from 'react'
import arrow from '../../etc/img/Arrow.png'

const ScrollBtn = (props) => {// func isShow text down/up
    const img = !props.isShowed ? <img src={arrow} style={{transform: 'rotate(180deg)'}}/> : <img src={arrow}/>;

    return (
        <button className="scroll-btn" onClick={() => {
            props.showFunc(props.isShowed)
        }}>{img}<span className="scroll-btn__text">{props.text}</span>{img}</button>
    )
};

export default ScrollBtn