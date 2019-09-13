import React, {useState} from 'react'
import ScrollBtn from "../../../etc/scroll_btns/ScrollBtn";
import photographerPhoto from "../../../etc/img/photo.jpg"
import VectorHeart from "../../../etc/svg/VectorHeart";


const About = () => {
    const [isShowedFirst, setShowAllFirst] = useState(false);
    const [isShowedSecond, setShowAllSecond] = useState(false);

    return (
        <div className="main__about">
            <div className="row">
                <div className="col-md-6 order-sm-first order-last">
                    <div className="about__item">
                        <span className="title">Об организаторе:</span>
                        <span className="text">Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли,
                          которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном
                          использовании и частных турах.</span>
                        <span className="text">Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету
                          и планам клиента. Мы никогда не зависим от субпоставщиков
                          и не свяжемся…</span>
                        {isShowedFirst ?
                            <span className="text">Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли,
                          которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном
                          использовании и частных турах.</span> : null}
                        <div className="button-wrapper">
                            {!isShowedFirst
                                ? <ScrollBtn showFunc={setShowAllFirst} isShowed={true} text="Читать еще"/>
                                : <ScrollBtn showFunc={setShowAllFirst} isShowed={false} text="Cкрыть"/>}
                        </div>
                    </div>
                    <div className="about__item">
                        <span className="title">Что я предоставлю:</span>
                        <span className="text">Встречу вас на машине после длительного перелета. Качественный подбор места и локации для вашей съемки. При необходимости
                      всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае !</span>
                        {isShowedSecond ?
                            <span className="text">Встречу вас на машине после длительного перелета. Качественный подбор места и локации для вашей съемки. При необходимости
                      всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае !</span> : null}
                        <div className="button-wrapper">
                            {!isShowedSecond
                                ? <ScrollBtn showFunc={setShowAllSecond} isShowed={true} text="Читать еще"/>
                                : <ScrollBtn showFunc={setShowAllSecond} isShowed={false} text="Cкрыть"/>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 order-sm-last order-firs">
                    <div className="profile-item">
                        <div className="profile-item__photographer">
                            <div className="photographer__photo"><img src={photographerPhoto}/></div>
                            <span className="photographer__name">Марина Иванова</span>
                            <span className="photographer__role">Фотограф</span>
                            <div className="photographer__button-wrapper"><a href="#">Показать больше <br/> информации о
                                фотографе</a></div>
                        </div>
                        <div className="profile-item__like"><VectorHeart/></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About