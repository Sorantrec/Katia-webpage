import React, { useContext } from 'react'
import Button from '../../../components/Button/Button';
import LanguagesContext from '../../../context/LanguagesContext'
import styles from "./HeroBlock.module.scss"

export default function HeroBlock() {
  const { language, data } = useContext(LanguagesContext);
  const pageData = data[language].Home.Hero;
  const emoji = require('emoji.json');
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6"></div>
          <div className="col-xs-12 col-md-6">
            <h1 className={styles.title}>{pageData.title[0]} <span>{pageData.title[1]}</span></h1>
            <p className={styles.position}>{pageData.position}</p>
            <p className={styles.info}>{pageData.info}{emoji[9].char}</p>
            <div className={styles.buttonsWrapper}>
              <Button text={pageData.primary} classes={styles.primary}></Button>
              <Button text={pageData.secondary} type="secondary"></Button>
            </div>
            <div className={styles.icons}>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-dribbble"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
