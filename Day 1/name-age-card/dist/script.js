function Person(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "person" }, /*#__PURE__*/
    React.createElement("h1", null, props.name), /*#__PURE__*/
    React.createElement("h2", null, "Your age : ", props.age)));


};

var app = /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Person, { name: "Kartikay", age: "21" }), /*#__PURE__*/
React.createElement(Person, { name: "Divyansh", age: "25" }));


// ReactDOM.render(<Person name="Kartikay" age="21"/>, document.querySelector('#p1'));

// ReactDOM.render(<Person name="Divyansh" age="25"/>, document.querySelector('#p2'));

ReactDOM.render(app, document.querySelector('#app'));