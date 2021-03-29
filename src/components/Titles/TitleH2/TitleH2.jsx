import React from 'react'
import styles from "./TitleH2.module.scss";

export default function TitleH2({ text = "", classes = "", innerHtml = false }) {
  return (text ? innerHtml ? <h2 className={`${styles.title} ${classes}`} dangerouslySetInnerHTML={{ __html: text }}></h2> : <h2 className={`${styles.title} ${classes}`}>{text}</h2> : "")
};
