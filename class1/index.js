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

console.log("Element:", element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
