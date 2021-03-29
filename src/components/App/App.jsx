import React, { useState } from 'react';
import styles from "./App.module.scss";
import "./styles/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from '../Header/Header';
import Home from './../../domens/Home/Home';
import LanguagesContext from "../../context/LanguagesContext";
import data from "../../domens/Home/data.json";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <main className={styles.main}>
      <LanguagesContext.Provider value={{ language, setLanguage, data }}>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Header></Header>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </LanguagesContext.Provider>
    </main>
  );
}

export default App;