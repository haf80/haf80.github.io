import React, { FunctionComponent, ReactElement } from "react";

const Header: FunctionComponent = (): ReactElement => {
  return (
    <p>
      <a href="/project">Project 1 </a>
      <a href="/">Project 2</a>
    </p>
  );
};

export default Header;
