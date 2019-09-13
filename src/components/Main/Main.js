import React from 'react'
import InfoBlock from "./main__components/InfoBlock";
import Gallery from "./main__components/Gallery";
import About from "./main__components/About";
import RegistrationWindow from "./main__components/RegistrationWindow";
import YMap from "./main__components/YMap";
import Feedback from "./main__components/Feedback";

const Main = (props) => {
    return (
        <>
            <div className="container">
                <InfoBlock/>
                <Gallery/>
                <About/>
                <RegistrationWindow openModal={props.openModal}/>
            </div>
            <div className="container-fluid">
                <YMap/>
            </div>
            <div className="container">
                <Feedback/>
            </div>
        </>
    )
};

export default Main