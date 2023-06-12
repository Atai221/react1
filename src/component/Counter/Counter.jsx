import React, {useState} from 'react';
import styles from './Counter.module.css'

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState('')

    const inputChange = function (event) {
        setValue(event.target.value)
    }

    // Проверка на число не реализованно т.к в input можно писать толька числа
    const buttonClick = function () {
        const inputNumber = Number(value)
        setCounter(counter + inputNumber)
        setValue('')
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Счетчик - {counter}</h1>
            <p className={styles.subtitle}>Увелчить счетчик</p>

            <hr />

            <input type='number' value={value} onChange={inputChange} className={styles.input}/>
            <button className={styles.btn} onClick={buttonClick}>Обновить</button>
        </div>
    );
};

export default Counter;
