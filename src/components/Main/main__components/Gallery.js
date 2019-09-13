import React, {useEffect, useState} from 'react'
import photo1 from '../../../etc/img/1.jpg'
import photo2 from '../../../etc/img/2.jpg'
import photo3 from '../../../etc/img/3.jpg'
import photo4 from '../../../etc/img/4.jpg'
import ScrollBtn from "../../../etc/scroll_btns/ScrollBtn";

const Gallery = () => {
    const [isShowed, setShowAll] = useState(false);
    let photoArr = [photo1, photo2, photo3, photo4];
    let doubledArr = photoArr.concat(photoArr);

    return (
        <>
            <div className="main__gallery d-none d-md-block">
                <span className="title">Фотографии пакета:</span>
                <div className="photo-wrapper">
                    <PhotoRow photoArr={photoArr}/>
                    <PhotoRow photoArr={photoArr}/>
                    {isShowed ? <PhotoRow photoArr={doubledArr}/> : null}
                </div>
                {isShowed
                    ? <div className="button-wrapper">
                        <ScrollBtn showFunc={setShowAll} isShowed={false} text="Скрыть"/>
                    </div>
                    : <div className="button-wrapper">
                        <ScrollBtn showFunc={setShowAll} isShowed={true} text="Показать все фото"/>
                    </div>}
            </div>
            <div className="main__slider d-md-none d-lg-none d-xl-none">
                <span className="title">Фотографии пакета:</span>
                <div className="photo-wrapper">
                    <Slider photoArr={photoArr}/>
                </div>
            </div>
        </>
    )
};

const PhotoRow = (props) => {
    return props.photoArr.sort(function () {
        return 0.5 - Math.random()
    }).map((el, index) => {
        return <div className="photo-wrapper__item" key={index}><img src={el}/></div>
    })

};

const Slider = (props) => {
    const [count, setCount] = useState(props.photoArr.length - 1);
    useEffect(() => {
        const id = setInterval(() => {
            count !== 0 ? setCount(count - 1) : setCount(props.photoArr.length - 1);
        }, 1000);
        return () => clearInterval(id);
    }, [count]);


    const handleClick = () => {
        count !== 0 ? setCount(count - 1) : setCount(props.photoArr.length - 1);
    };

    return (
        <div onClick={() => {
            handleClick()
        }} className="photo-wrapper__item"><img src={props.photoArr[count]}/></div>
    )

};

export default Gallery