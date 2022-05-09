import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './css/HomeView.module.css';

const HomeView = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.welcome}>Добро пожаловать!<br />Зарегистрируйтесь!</h1>
                    <button type='button' className={styles.btnStart}><NavLink className={styles.linkStart} to="/register">Начать</NavLink></button>
                </div>
                <ul className={styles.text} >Используемые технологии:
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/queen-uk.png" alt="" width="15px" height="15px"/><p>React JS</p></li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/queen-uk.png" alt="" width="15px" height="15px"/><p>React Redux</p></li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/queen-uk.png" alt="" width="15px" height="15px"/><p>React Router</p></li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/queen-uk.png" alt="" width="15px" height="15px"/><p>React Hooks</p></li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/queen-uk.png" alt="" width="15px" height="15px"/><p>CSS Modules</p></li>
                </ul>
            </div>
        </>
    )
}

export default HomeView;
