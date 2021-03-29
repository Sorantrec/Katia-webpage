import React from 'react'
import { Link } from 'react-router-dom'
import HeaderList from './HeaderList/HeaderList';
import styles from "./Header.module.scss";
import Languages from './Languages/Languages';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.logo}>Kateryna <span>Kaida</span></Link>
      <HeaderList></HeaderList>
      <Languages></Languages>
    </header>
  )
};
