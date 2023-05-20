function Person(props){
    return(
        <div className="person">
            <h1>{props.name}</h1>
            <h2>Your age : {props.age}</h2>
        </div>
    );
};

var app=(
  <div>
    <Person name="Kartikay" age="21"/>
    <Person name="Divyansh" age="25"/>
  </div>
)
// ReactDOM.render(<Person name="Kartikay" age="21"/>, document.querySelector('#p1'));

// ReactDOM.render(<Person name="Divyansh" age="25"/>, document.querySelector('#p2'));

ReactDOM.render(app, document.querySelector('#app'));