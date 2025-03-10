import React from "react";

const ComponentContainer = ({ children, ...rest }) => {
  return (
    <section className="component-container" {...rest}>
      {children}
    </section>
  );
};

export default ComponentContainer;