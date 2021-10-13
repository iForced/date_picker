import React, {useReducer, MouseEvent, ChangeEvent} from 'react';
import s from './DatePicker.module.css'
import {dateReducer, days, initialState, setDay, setMonth, setYear} from "../state/dateReducer";

const DatePicker = () => {

        const [date, dispatch] = useReducer(dateReducer, initialState)

        const daysInMonth = function () {
            return 33 - new Date(date.year, date.month, 34).getDate();
        }
        const nameOfFirstDay = new Date(date.year, date.month, 0).getDay()
        const daysCount = []
        for (let i = 0; i <= daysInMonth() + nameOfFirstDay; i++) {
            i < nameOfFirstDay ? daysCount.push(-1) : daysCount.push(i - nameOfFirstDay + 1)
        }

        const onSetDay = (e: MouseEvent<HTMLDivElement>) => {
            if (+e.currentTarget.innerText !== 0) {
                dispatch(setDay(+e.currentTarget.innerText))
            }
        }
        const onSetMonth = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setMonth(+e.currentTarget.value))
        }
        const onSetYear = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setYear(+e.currentTarget.value))
        }

        return (
            <div className={s.picker}>
                <div>{`${date.day < 10 ? '0' + date.day : date.day} . ${date.month + 1 < 10 ? '0' + (date.month + 1) : date.month + 1} . ${date.year}`}</div>
                <div className={s.choose_year}>
                    <input
                        type="number"
                        onChange={onSetYear}
                        value={'' + date.year}
                        min={0}
                        max={9999}
                    />
                </div>
                <div className={s.choose_month}>
                    <select
                        onChange={onSetMonth}
                        value={date.month + 1}
                    >
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
                <div className={s.choose_day}>
                    {days.map(d => <div className={s.day + ' ' + s.names}>{d}</div>)}
                    {daysCount.map(el =>
                        <div
                            key={Math.random()}
                            className={s.day}
                            onClick={onSetDay}
                        >{el < 0 ? '' : el}
                        </div>
                    )}
                </div>
            </div>
        );
    }
;

export default DatePicker;