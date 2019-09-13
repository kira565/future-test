import React, {useEffect, useState} from 'react'
import stars from '../../../etc/img/Group 8.3.png'
import accept from '../../../etc/img/Vector 2.3.png'
import photo1 from '../../../etc/img/p1.png'
import photo2 from '../../../etc/img/p2.png'
import photo3 from '../../../etc/img/p3.png'
import ScrollBtn from "../../../etc/scroll_btns/ScrollBtn";

const posts = [
    {
        id: 1,
        name: "Валерия Антонова",
        photo: photo1,
        gender: 'female',
        role: "Арт-директор",
        rating: 5,
        text: "Хотим выразить огромную благодарность вашей компании! " +
        "Получили море ощущений, все прошло просто замечательно. Фотки " +
        "получились великолепные, отдельное спасибо фотографу!",
        date: "27 Апреля, 2019г."
    },
    {
        id: 2,
        name: "Виталий Петров",
        photo: photo2,
        role: "Фотограф",
        gender: 'male',
        rating: 5,
        text: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) " +
        "Впечатлило всё: сам вертолет, взлет, полёт, приземление. \n" +
        "Организация полёта отличная. Спасибо!",
        date: "19 Апреля, 2019г."
    },
    {
        id: 3,
        name: "Джим Керри",
        photo: photo3,
        role: "Арт-директор",
        gender: 'male',
        rating: 5,
        text: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы \n" +
        "с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, " +
        "правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
        date: "11 Апреля, 2019г."
    },
];
let additionalPosts = [];
for (let i = 0; i < 45; i++) {
    additionalPosts.push(posts[0], posts[1], posts[2]);
}


const Feedback = () => {
    const [isShowed, setShowAll] = useState(false);
    const [arr, setArr] = useState(posts);

    useEffect(() => {
        if (isShowed) {
            setArr(additionalPosts)
        } else setArr(posts)
    }, [isShowed, arr]);

    return (
        <div className="main__feedback">
            <div className="title"><span>Отзывы:</span></div>
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <div className="post-container">
                        {arr.map((elem, index) => {
                            return <Post key={index} name={elem.name} photo={elem.photo} role={elem.role}
                                         gender={elem.gender} text={elem.text} date={elem.date}/>
                        })}
                    </div>
                </div>
            </div>
            {isShowed
                ? <div className="button-wrapper">
                    <ScrollBtn showFunc={setShowAll} isShowed={false} text="Скрыть"/>
                </div>
                : <div className="button-wrapper">
                    <ScrollBtn showFunc={setShowAll} isShowed={true} text="Показать все (134)"/>
                </div>}
        </div>
    )
};

const Post = (props) => {
    return (
        <div className="post-wrapper">
            <div className="photo"><img src={props.photo}/></div>
            <div className="post-content">
                <span className="author">{props.name}</span>
                <div className="role">{props.role}</div>
                <div className="rating">
                    <div className="rating__stars"><img src={stars}/></div>
                    <div className="rating__desc">
                        <img src={accept}/>
                        {props.gender === 'female'
                            ? <span>Супер! Я бы заказала съемку снова!</span>
                            : <span>Супер! Я бы заказал съемку снова!</span>}
                    </div>
                </div>
                <div className="text">{props.text}</div>
                <div className="date">{props.date}</div>
            </div>
        </div>
    )
};

export default Feedback