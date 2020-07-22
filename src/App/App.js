import React from 'react';
import styles from './App.module.scss';

import ROUTES, { RenderRoutes } from '../routes';

function App(props) {
  return (
    <div>
      app runs here
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
