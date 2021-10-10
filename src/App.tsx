import React from 'react';
import s from './App.module.css'
import DatePicker from "./DatePicker/DatePicker";

const App = () => {
    return (
        <div className={s.app}>
            <DatePicker/>
        </div>
    );
};

export default App;