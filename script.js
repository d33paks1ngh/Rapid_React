import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {},
  "this is react heading using old version"
);

const jsxheading = <h1>This is using jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

console.log(heading);
