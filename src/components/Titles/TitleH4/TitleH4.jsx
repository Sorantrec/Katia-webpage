import React from 'react'
import styles from "./TitleH4.module.scss";

export default function TitleH4({ text = "", classes = "", innerHtml = false }) {
  return (text ? innerHtml ? <h4 className={`${styles.title} ${classes}`} dangerouslySetInnerHTML={{ __html: text }}></h4> : <h4 className={`${styles.title} ${classes}`}>{text}</h4> : "")
};
