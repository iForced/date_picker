import React, {useReducer, useState} from 'react';
import s from './DatePicker.module.css'
import {dateReducer, initialState} from "../state/dateReducer";

const DatePicker = () => {

    const [showModal, setShowModal] = useState<boolean>(true)
    const [date, dispatch] = useReducer(dateReducer, initialState)

    return (
        <div className={s.picker}>
            <input
                type="text"
                className={s.input}
                onClick={() => setShowModal(!showModal)}
                value={`${date.day}.${date.month}.${date.year} ${date.name}`}
            />
            {
                showModal &&
                <div className={s.modal}>

                </div>
            }
        </div>
    );
};

export default DatePicker;