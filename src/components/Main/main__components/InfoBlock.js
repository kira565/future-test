import React, {useState} from 'react'
import VidShooting from "../../../etc/svg/3hours_video_shooting";
import PhotoCamera from "../../../etc/svg/PhotoCamera";
import GeoPoint from "../../../etc/svg/GeoPoint";
import ChatClouds from "../../../etc/svg/ChatClouds";
import playButton from '../../../etc/img/play_button.png'
import GroupCup from "../../../etc/svg/GroupCup";
import stars from "../../../etc/img/Group 8.3.png"

const InfoBlock = () => {
    const [isVideo, setVideo] = useState(false);

    return (
        <div className="row">
            <div className="col-md-6 order-sm-first order-last">
                <div className="main__info-block">
                    <span className="title">Фотосессия <br/> в вертолете</span>
                    <span className="text">Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты</span>
                    <div className="icon-bar">
                        <div className="icon-bar__item"><VidShooting/><span>3 часа съемки</span></div>
                        <div className="icon-bar__item"><PhotoCamera/><span>Более 50 фотографий</span></div>
                        <div className="icon-bar__item"><GeoPoint/><span>Москва</span></div>
                        <div className="icon-bar__item"><ChatClouds/><span>Готовы ответить на любые вопросы</span></div>
                    </div>
                    <div className="rating">
                        <div className="cup-wrapper"><GroupCup/></div>
                        <div className="desc-wrapper">
                            <div className="desc-text">Более <span>50</span> отзывов с оценкой</div>
                            <div className="star-wrapper"><img src={stars}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-pull-6">
                <div className="main__video-block order-sm-last order-firs">
                    {
                        !isVideo ?
                            <div className="video-wrapper">
                                <button onClick={setVideo}><img src={playButton}/></button>
                            </div>
                            :
                            <iframe width="100%" height="337" src="https://www.youtube.com/embed/YEN91131NRg?autoplay=1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                    }
                </div>
            </div>
        </div>
    )
};

export default InfoBlock