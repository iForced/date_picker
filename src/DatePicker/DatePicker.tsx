import React, {useReducer, useState} from 'react';
import s from './DatePicker.module.css'
import {dateReducer, initialState, setDay, setMonth, setYear} from "../state/dateReducer";

const DatePicker = () => {

    const [showModal, setShowModal] = useState<boolean>(true)
    const [date, dispatch] = useReducer(dateReducer, initialState)

    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const years = [2019, 2020, 2021, 2022]


    return (
        <div className={s.picker}>
            <input
                onChange={() => {}}
                type="text"
                className={s.input}
                onClick={() => setShowModal(!showModal)}
                value={`${date.day && date.day < 10 ? '0' + date.day : date.day}.${date.month && date.month < 10 ? '0' + date.month : date.month}.${date.year} ${date.name}`}
            />
            {
                showModal &&
                <div className={s.modal}>
                    <div className={s.choose_year}>
                        <select
                            name="year"
                            onChange={(e) => dispatch(setYear(+e.currentTarget.value))}
                            value={'' + date.year}
                        >
                            {
                                years.map(year =>
                                    <option
                                        key={year + Math.random()}
                                        value={year}
                                    >{year}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className={s.choose_month}>
                        <select
                            name="month"
                            onChange={(e) => dispatch(setMonth(+e.currentTarget.value))}
                            value={'' + date.month}
                        >
                            {
                                months.map(month =>
                                    <option
                                        key={month + Math.random()}
                                        value={month}
                                    >{month}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className={s.choose_day}>
                        {
                            days.map(day =>
                                <div
                                    key={day + Math.random()}
                                    className={s.day}
                                    onClick={(e) => dispatch(setDay(+e.currentTarget.innerText))}
                                >{day}
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default DatePicker;