const element = React.createElement(
  "h1",
  {
    id: "greeting",
    class: "greeting",
    style: { color: "blue", fontSize: "20px" },
  },
  "Hello, from reactJS js shivam!"
);

console.log("Element:", element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
