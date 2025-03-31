import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "h1",
  {
    id: "greeting",
    className: "greeting-class",
  },
  "Hello, from reactJS js shivam!"
);

const jsxElement = (
  <h1 className="greeting-class" id="greeting">
    Hello, from reactJS js shivam! <br /> This is a JSX element.
  </h1>
);

console.log("Element:", element);
console.log("JSX Element:", jsxElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([element, jsxElement]);
