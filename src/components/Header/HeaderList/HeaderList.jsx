import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from "./HeaderList.module.scss";
import LanguagesContext from './../../../context/LanguagesContext';

export default function HeaderList() {
  const { language, data } = useContext(LanguagesContext);
  return (
    <ul className={styles.wrapper}>
      {data[language].Header.map((item, index) => <li className={`${styles.item} ${index === 0 ? styles.active : ""}`} key={item.title}><Link to={item.url}>{item.title}</Link></li>)}
    </ul>
  )
};