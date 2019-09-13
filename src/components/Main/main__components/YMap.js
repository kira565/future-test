import React, {useEffect} from 'react'
import CircleOne from "../../../etc/svg/CircleOne";
import CircleTwo from "../../../etc/svg/CircleTwo";
import CircleThree from "../../../etc/svg/CircleThree";
import photographerSm from '../../../etc/img/photographer_small.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from '../../../etc/img/Arrow-slider.png'
import leftArrow from '../../../etc/img/arrow-slider-left.png'

const YMap = () => {
    useEffect(() => {
        ymaps.ready(init);

        function init() {
            let myMap = new ymaps.Map("map", {
                center: [55.7545894352355, 37.60678194615571],
                zoom: 13,
                contols: ['default', 'routeButtonControl']
            });
            myMap.geoObjects
                .add(new ymaps.Placemark([55.754999985211526, 37.61115608813009], {
                    balloonContent: "<strong>Встречаемся тут!</strong>"
                }, {
                    preset: 'islands#icon',
                    iconColor: '#FF0000'
                }));
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
            myMap.behaviors.disable(['scrollZoom']);
        }
    }, []);

    return (
        <>
            <div className="main__YMap">
                <div id="map" style={{width: '100%', height: '509px', zIndex: -1}}>
                    <div className="row">
                        <div className="col-md-5 offset-1 hidden-xs hidden-sm d-none d-md-block">
                            <div className="YMap-block">
                                <div className="YMap-block__item">
                                    <div className="YMap-circle"><CircleOne/></div>
                                    <div className="YMap-text">
                                        <div className="title">Где встречаемся?</div>
                                        <div className="text">Москва</div>
                                    </div>
                                </div>
                                <div className="YMap-block__item">
                                    <div className="YMap-circle"><CircleTwo/></div>
                                    <div className="YMap-text">
                                        <div className="title">Время съемки</div>
                                        <div className="text">3 часа</div>
                                    </div>
                                </div>
                                <div className="YMap-block__item">
                                    <div className="YMap-circle"><CircleThree/></div>
                                    <div className="YMap-text">
                                        <div className="title">Мест осталось:</div>
                                        <div className="text">2 места</div>
                                    </div>
                                </div>
                                <div className="YMap-block__item photographer">
                                    <div className="YMap-photo"><img src={photographerSm}/></div>
                                    <div className="YMap-text">
                                        <div className="name">Мария Иванова</div>
                                        <div className="role">Фотограф</div>
                                        <div className="link"><a href="#">Показать больше информации</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-none d-lg-none d-xl-none">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="YMap-block-slider-sm">
                                <div className="slider-wrapper">
                                    <ArrowSlider/>
                                </div>
                                <div className="slider-desc">
                                    <div className="slider-desc__photo"><img src={photographerSm}/></div>
                                    <div className="slider-desc__text">
                                        <div className="name">Мария Иванова</div>
                                        <div className="role">Фотограф</div>
                                        <div className="link"><a href="#">Показать больше информации</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const ArrowSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>
    };
    return (
        <div className="YMap-slider-sm">
            <Slider {...settings}>
                <div className="YMap-slider-sm__item">
                    <div className="circle"><CircleOne/></div>
                    <div className="title">Где встречаемся?</div>
                    <div className="text">Москва</div>
                </div>
                <div className="YMap-slider-sm__item">
                    <div className="circle"><CircleTwo/></div>
                    <div className="title">Время съемки</div>
                    <div className="text">3 часа</div>
                </div>
                <div className="YMap-slider-sm__item">
                    <div className="circle"><CircleThree/></div>
                    <div className="title">Мест осталось:</div>
                    <div className="text">2 места</div>
                </div>
            </Slider>
        </div>
    )
};

const CustomNextArrow = (props) => {
    return <div className="arrows" onClick={props.onClick}><img src={rightArrow}/></div>
};
const CustomPrevArrow = (props) => {
    return <div className="arrows" onClick={props.onClick}><img src={leftArrow}/></div>
};

export default YMap