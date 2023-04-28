import './App.css';
import React, {useState} from 'react';
import { projects } from './components/projects';
import { func } from 'prop-types';

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



 
  
  return (
    <div className='toolbar'>
      {filters.map((el)=> <button onClick={event =>{
        props.onSelectFilter(event.target.innerText);
        }}  className='btn' key ={el}>{el}</button>)}
      
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




////////////////////////////////////////////////////////////////////////






function Item(props) {
  const {data} = props;


  return(
    <div>
      { data.showCars ? data.cars.map((item, id)=>{
        return <div key={id} className='innercontainer1'>
          <h1 className='triger'>{item.name}</h1>
          <p style={{margin: "10px"}}>{"year: " + item.year}</p>
          <input style={{fontSize: "20px", textAlign: "center"}}
          type="text" onChange={event => {props.ChangeTitle(event)}} />

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
    <button onClick={this.props.ToggleFunc}>Toggle</button>
    </>
  )}
}


function App() {

  const [data, setData] = useState({
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
});

function ChangeTitle(event) {
  
}

function ToggleFunc() {
  setData({...data, showCars: !data.showCars})
  

}
  return(
    <div className='container1'>
     <Title ToggleFunc={ToggleFunc} title={data.pageTitle}></Title>
      <Item ChangeTitle={ChangeTitle} data={data}/>
    
    </div>
  )
}
export default App;



