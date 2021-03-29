import React, { useContext } from 'react'
import LanguagesContext from './../../../context/LanguagesContext';
import styles from './GetKnow.module.scss';
import TitleH2 from './../../../components/Titles/TitleH2/TitleH2';
import CustomText from '../../../components/CustomText/CustomText';

export default function GetKnow() {
  const { language, data } = useContext(LanguagesContext);
  const pageData = data[language].Home.Description;

  console.log("pageData", pageData);

  return (
    <section className={`getKnow ${styles.section}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <TitleH2 text={pageData.title} innerHtml="true" classes={styles.title}></TitleH2>
            <CustomText text={pageData.text} classes={styles.text}></CustomText>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.block}></div>
          </div>
        </div>
      </div>
    </section>
  )

};
