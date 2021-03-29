import React from 'react'
import styles from './CustomText.module.scss';

export default function CustomText({ text = "", classes = "", innerHtml = false, type = "block" }) {
  if (innerHtml) {
    return (type === "block" ? <p className={`${classes} ${styles.text}`} dangerouslySetInnerHTML={{ _html: text }}></p> : <span className={`${classes} ${styles.text}`} dangerouslySetInnerHTML={{ _html: text }}></span>)
  }
  else {
    return (type === "block" ? <p className={`${classes} ${styles.text}`}>{text}</p> : <span className={`${classes} ${styles.text}`}>{text}</span>)
  }
};
