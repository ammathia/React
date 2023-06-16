import "./App.scss";
import React, { useEffect, useState } from "react";
import { projects } from "./components/projects";
import { films } from "./components/films";
import { Component } from "react";
import withClass from "./HOC/withClass";
import { useRef } from "react";
import { func } from "prop-types";
import { useReducer } from "react";
import Todo from "./components/Todo";

export const ACTIONS = {
  DELETE_TODO: "delete-todo",
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

/*
function ProjectList(props) {
  const { projects } = props;

  return(
      <>
          {projects.map((el, id) => { return <div key={id} className='element'>
             <img key={id} src={el.img} alt="smth"></img> </div>})}
          </>
         
  )
}

function ToolBar(props) {
  const {filters} = props;
  const {selected} = props;

  return (
    <div className='toolbar'>
      {filters.map((el) => <button onClick={event => {

        props.onSelectFilter(event.target.innerText);

      }}  className={selected == el ? "btn_active" : "btn"} key ={el}> {el} </button>)}
      
    </div>
  )
}

function App1() {
  
  const filters=["All", "Websites", "Business Cards", "Flayers"];
  
  const [ selected, setSelected] = useState('All');

  const [ NewProjects, updateProjects ] = useState(projects);


function onSelectFilter(filterValue) { 
  setSelected(filterValue);
      }
      console.log(selected)

const filterProjects = NewProjects.filter((item) => {

  if(selected === 'All') {
    return projects
  }
  return item.category === selected
}) 
  


console.log('render')

  return (
    <div>
       <ToolBar
      filters={filters}
      selected={selected}
      onSelectFilter={onSelectFilter}
       /> 
      
       <div className='container'>
        
        <div className='inner'>
          <ProjectList projects={filterProjects} />
        </div>

       </div>

    </div>
  );
}
*/

//////////////////////////////////////////////////////////////////////////////////////////

/*
function Item(props) {
  const {data} = props;
  const inputRef = useRef(null);




  return(
    <div style={{display:"flex", alignItems: "center", flexDirection: "column",textAlign: "center",}}>

      { data.showCars ? data.cars.map((item, id)=>{
        return <div key={id} style ={{
          width: "500px",
          border: "1px solid black",
          boxShadow: "0 0 5px black",
          margin: "10px",
          borderRadius: "5px",
        }}>
          <h1 style={{wordBreak: "break-all"}} className='triger'>Car name: {item.name}</h1>

          <p style={{margin: "10px"}}>{"year: " + item.year}</p>

          <input ref={inputRef} maxLength="14"  style={{fontSize: "20px", textAlign: "center"}}
          type="text" value={data.cars[id].name}  onChange={event => {props.ChangeTitle(event.target.value, id)}} />

          <button onClick={()=>props.DeleteItem(id)} style={{margin:"10px", fontSize:"20px"}} type="button">delete</button>

        </div>
        
      })
      : 
      null}
    </div>
  )
}

class Title extends React.Component {



  render() {
    const {title} = this.props
    return(
    <>
    <h1 style={{fontSize: "40px", margin: "10px",}}>{title}</h1>

    <button style={{margin: "10px"}} onClick={this.props.ToggleFunc}>Toggle</button>

    <button onClick={(event)=>this.props.Restart(event)}>Restart</button>
    </>
  )}
}


function App() {
  
  const cars = {
    cars :[{
    name: "Ford",
    year: 1998
  },
  {
    name: "Nissan",
    year: 2004
  },
  {
    name: "Bugatti",
    year: 1964
      }],
    pageTitle: "Cars",
  showCars: true
};

const startNames = ["Ford", "Nissan", "Bugatti",];
const [names, setNames] =  useState(startNames);
const [data, setData] = useState(cars);
  
function ChangeTitle(name, id) {
  if (name.trim() === "" ) {
    name = names[id]
  }
 
  const car = data.cars[id];
  car.name = name;
  const cars = [...data.cars];
  cars[id] = car;
  setData({...data, cars})

}

function ToggleFunc() {
  setData({...data, showCars: !data.showCars})
  
}

function Restart() {
  setData(cars)
  setNames(startNames)
}

function DeleteItem(id) {
  const cars = [...data.cars];
  cars.splice(id, 1)
  setData({...data, cars})
  const names1 = names;
  names1.splice(id, 1)
  setNames(names1)

}
return(
  <div className='container1'>
     <Title Restart ={Restart} ToggleFunc={ToggleFunc} title={data.pageTitle}></Title>
      <Item DeleteItem={DeleteItem} ChangeTitle={ChangeTitle} data={data}/>
    
    </div>
  )
}
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
function Stars(props) {
  const {number} = props;
  let arr =[];

  const star = ( <ul  className="card-body-stars u-clearfix">
  <li key ={number}>
    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
      <path d="M0 0h18v18H0z" fill="none"/>
    </svg>
  </li>
</ul>
);

let zeroStar =(<p style={{fontSize:"20px"}}>None</p>);

if (number >= 1 && number <= 5) {

  for( let i = 0; i < number; i++ ) {
    arr.push(star)
  }
} else {
  arr.push(zeroStar)
}

let showStars = arr.map((item)=>{ return item});
  
  return(
    <>
    {showStars}
    </>
  )
}


function Film(props) {
  const {films} = props;



  return(
    <div className='film_container'>
    <h1 style={{padding: "10px"}}>Films/ratings</h1>
    {films.map((item, id) => {
    return <div className='film_card'>
      <h3>{item.name}</h3>
      <p style={{paddingTop: "10px"}}>Rating: 
      </p>
      <Stars number={item.stars} />
    </div>
  }) }
</div>
  )
}

function App3() {
  
  return(
    <>
    <Film films={films} />
    </>
  )
}
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
class Lock extends Component {

  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
    this.state = {
      number: 0
    }
  }

  

componentDidMount() {
  this.setState({})
  if(this.state.number === 1) {
    this.inputRef.focus()
  }
}



  render() {
    return(
      <>
       {this.props.cars.map((item, index)=> {
          return <>
          <h1>{item.name}</h1>
          <input ref={this.inputRef} type="text"  />
          </>
        })}
      </>
    )
  }
}



class App extends Component {

  state = {
    counter: 0
  }

  addCounter = () =>  {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  Item = [{
    name: "Audi",
  },
  {
    name: "BMW",
  },
  {
    name: "Opel",
  },
  ];

  render() {
    return(
      <div>
        <h2 className='Counter11'>Count {this.state.counter}</h2>
        <button style={{ fontSize:"30px"}} onClick={this.addCounter}>+</button>
        <button style={{ fontSize:"30px"}}  onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>
       <Lock cars={this.Item} />
      </div>
    )
  }


}


export default withClass(App, App);
*/

//////////////////////////////////////////////////////////////////////////////

/*
function App() {

  const [hex, setHex] = useState("#");
  const [rgbColor, setRgbColor] = useState({r: 0, g: 0, b: 0})

  function hexToRgb(hex) {

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    console.log(result)

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


  function changeValue(value) {
    if(value==="") {
      value = "#"
    }
    setHex(value)

    if(hexToRgb(value)) {
      setRgbColor(hexToRgb(value))
      console.log()

    } else if (value.length === 7 && !hexToRgb(value) ) {
      setHex("#")
    }
  }

  return(
    <div style={{backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`}} className='container21'>
      <p className='box11'>"#a-f,0-9"</p>
      <input maxLength={7} value={hex} onChange={(evt)=> changeValue(evt.target.value)} className='box11' type="text" />
      <p className='box11'>rgb({rgbColor.r}, {rgbColor.g}, {rgbColor.b})</p>
    </div>
  )
}
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
function ShowImage(props) {

  const { urls } = props


  return(
    <div>
      { urls && urls.map((item, id) => {
    return <img key = {id} className='img_box' src={item} alt="img" />
      })}
    </div>
  )
}



function App() {

  const [files, setFiles] = useState("");

  const [ urls, setUrls ] = useState("")

  const inputRef = useRef();




  const handleName = () => {
    setFiles(...inputRef.current.files)
  }
  
  useEffect(()=> {
    
    if(files && files.length !== 0) {
      console.log(files)
       setUrls((prev) =>  [...prev, URL.createObjectURL(files)])
    }

  }, [files]);

  function changeToZero() {

  }
  

 
  return(
    <div className='container22'>

      <div className='box22'>

    <input accept='image/png, image/jpeg, image/jpg' ref={inputRef} className='biginput'
     id="input_file" type="file"  onChange={handleName} />

    <label className='input_label' htmlFor="input_file">Choose image file</label>

    </div>

    <ShowImage urls={urls} />
    
    </div>
  )
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////

/*

function reducer(todos, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="divTodo">
          <input
            className="inputTodo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {todos.map((todo) => {
            return <Todo dispatch={dispatch} todo={todo}></Todo>;
          })}
        </div>
      </form>
    </>
  );
}
export default App;
*/

function App() {}

export default App;
