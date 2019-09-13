import React, {useState} from "react"
import '../styles/styles.less'
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWindow from "./ModalWindow";

const App = () => {
    const [isModalOpened, setModalOpened] = useState(false);

    const modalController = (isOpen) => {
        setModalOpened(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.background = 'rgba(0,0,0,.7)'
        }
        if (!isOpen) {
            document.body.style.overflow = 'auto';
            document.body.style.background = 'white'
        }
    };

    return (
        <>
            <div className={isModalOpened ? "all-content inactive" : "all-content active"}>
                <Header openModal={modalController}/>
                <Main openModal={modalController}/>
                <Footer/>
            </div>
            {isModalOpened && <ModalWindow closeModal={modalController}/>}
        </>
    )
};

export default App;