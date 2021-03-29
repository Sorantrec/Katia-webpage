import React from 'react'
import styles from "./TitleH3.module.scss";

export default function TitleH3({ text = "", classes = "", innerHtml = false }) {
  return (text ? innerHtml ? <h3 className={`${styles.title} ${classes}`} dangerouslySetInnerHTML={{ __html: text }}></h3> : <h3 className={`${styles.title} ${classes}`}>{text}</h3> : "")
};
