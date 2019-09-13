import React from 'react'
import Nav from "./header_components/Nav";
import Offer from "./header_components/Offer";

const Header = (props) => {
    return (
        <>
            <Nav/>
            <Offer openModal={props.openModal}/>
        </>
    )
};

export default Header