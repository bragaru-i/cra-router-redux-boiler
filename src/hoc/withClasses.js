import React from 'react';

const withClasses = (WrappedComponent, className) => (props) => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);
export default withClasses;
