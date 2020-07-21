import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      app runs
      <h1>
        HEading 1<div className="subheading-1"> subheading</div>
      </h1>
      <p> paragraph there 1</p>
      <p className="text"> ordinary text goes here</p>
      <p className="text text--sm text--light"> ordinary text goes here</p>
      <p className="text text--lg text--bold"> ordinary text goes here</p>
    </div>
  );
}

export default App;
