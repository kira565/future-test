import React, {useEffect, useState} from 'react'
import close from "../etc/img/Close.png"

const ModalWindow = (props) => {
    const [values, setValues] = useState({
        date: '',
        email: '',
        name: '',
        lastName: '',
        tel: '',
        cardNum: '',
        cardTern: '',
        cvv: '',
        isAccepted: false
    });
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if (values.date && values.email && values.name && values.lastName
            && values.tel && values.cardNum && values.cardTern
            && values.cvv && values.isAccepted) {
            setDisabled(false)
        }
    }, [values]);


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (name === 'tel') {
            setValues({...values, [name]: value.slice(0, 11)})
        } else if (name === 'cardNum') {
            setValues({...values, [name]: value.slice(0, 16)})
        } else if (name === 'cardTern') {
            setValues({...values, [name]: value.slice(0, 5)})
        } else if (name === 'cvv') {
            setValues({...values, [name]: value.slice(0, 3)})
        } else {
            setValues({...values, [name]: value})
        }
    };
    const handleSubmit = event => {
        alert(`Добрый день, ${values.name}. Спасибо за вашу бронь. Ваша заявка будет рассмотрена на ${values.date}. Мы перезвоним вам на ваш номер (${values.tel})`);
        event.preventDefault();
        handleOpen(false)
    };
    const handleOpen = isOpen => {
        props.closeModal(isOpen)
    };

    return (
        <div className="modal-wrapper">
            <button onClick={() => {
                handleOpen(false)
            }} className="close">
                <div><img src={close}/></div>
            </button>
            <div className="title"><span>Бронирование</span></div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="content__first-group">
                        <label>
                            <span>Дата<span>*</span></span>
                            <input name="date" type="date" value={values.date} onChange={handleInputChange}/>
                        </label>
                        <label>
                            <span>Email<span>*</span></span>
                            <input name="email" type="text" placeholder="Электронная почта" value={values.email}
                                   onChange={handleInputChange}/>
                        </label>
                        <label>
                            <span>Имя<span>*</span></span>
                            <input name="name" type="text" placeholder="Имя" value={values.name}
                                   onChange={handleInputChange}/>
                        </label>
                        <label>
                            <span>Фамилия<span>*</span></span>
                            <input name="lastName" type="text" placeholder="Фамилия" value={values.lastName}
                                   onChange={handleInputChange}/>
                        </label>
                        <label>
                            <span>Телефон<span>*</span></span>
                            <input name="tel" type="number" placeholder="8 (905) 184-81-40" value={values.tel}
                                   onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className="content__second-group">
                        <label>
                            <span>Данные карты<span>*</span></span>
                            <input name="cardNum" type="number" placeholder="Номер карты" value={values.cardNum}
                                   onChange={handleInputChange}/>
                            <div>
                                <input name="cardTern" type="number" placeholder="Срок действия" value={values.cardTern}
                                       onChange={handleInputChange}/>
                                <input name="cvv" type="number" placeholder="CVV" value={values.cvv}
                                       onChange={handleInputChange}/>
                            </div>
                        </label>
                    </div>
                    <div className="content__third-group">
                        <label className="con">
                            <input required type="checkbox" name="isAccepted" checked={values.isAccepted}
                                   onChange={handleInputChange}/>
                            <span className="checkmark"/>
                            <div className="text">Я согласен с пользовательским<br/>
                                соглашением и публичной офертой
                            </div>
                        </label>
                        <button disabled={disabled} type="submit" className="btn-submit">Забронировать</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ModalWindow