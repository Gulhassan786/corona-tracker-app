import React from 'react';
import './App.css';
import styles from './App.module.css';
import { cards, chart, countrypicker } from "./components";
function App() {
  return (
    <div className={styles.container}>
     <cards/>
      <countrypicker />
     <chart/>
    </div>
  );
}

export default App;
