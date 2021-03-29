import React, { useContext, useState } from 'react'
import styles from "./Languages.module.scss";
import LanguagesContext from './../../../context/LanguagesContext';

export default function Languages() {
  const [data, setData] = useState([
    {
      lang: "EN",
      active: true
    },
    {
      lang: "PL",
      active: false
    }
  ])
  const { setLanguage } = useContext(LanguagesContext);
  const postLanguage = (e) => {
    const newData = [...data];
    for (let item of newData) {
      item.active = false;
      if (item.lang === e.target.textContent) {
        item.active = !item.active;
        setData(newData)
        setLanguage(e.target.textContent);
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <span onClick={(e) => postLanguage(e)} className={` ${data[0].active ? styles.active : ''}`}>EN</span>
      <span>|</span>
      <span onClick={(e) => postLanguage(e)} className={`${data[1].active ? styles.active : ''}`}>PL</span>
    </div>
  )
};
