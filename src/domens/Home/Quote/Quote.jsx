import React from 'react'
import LanguagesContext from './../../../context/LanguagesContext';

export default function Quote() {
  const { language, data } = useContext(LanguagesContext);
  const pageData = data[language].Home.Description;

  return (
    <section>
      
    </section>
  )

};
