import React from 'react'
import styles from "./TitleH1.module.scss";

export default function TitleH1({ text = "", classes = "", innerHtml = false }) {
  return (text ? innerHtml ? <h1 className={`${styles.title} ${classes}`} dangerouslySetInnerHTML={{ __html: text }}></h1> : <h1 className={`${styles.title} ${classes}`}>{text}</h1> : "")
};
