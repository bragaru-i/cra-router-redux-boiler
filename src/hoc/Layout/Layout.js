import React from 'react';
import Aux from '../Aux';

const Layout = (props) => {
  return (
    <Aux>
      <div>Navigation goes here</div>
      <main>{props.children}</main>
      <footer>Here goes footer</footer>
    </Aux>
  );
};

export default Aux;
