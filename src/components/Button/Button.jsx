import React from 'react'
import styles from "./Button.module.scss"

export default function Button({ text, classes, type = "primary" }) {
  return <button className={`${classes} ${styles.button} ${type === "primary" ? styles.primary: styles.secondary}`}>{text}</button>
};
