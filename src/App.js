import './App.css';
import React, {useState} from 'react';
import { projects } from './components/projects';



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

  const  filterSelected = (event) => {
    // console.log(event.target.innerText)
    props.onSelectFilter(event.target.innerText)
    }
  

  return (
    <div className='toolbar'>
      {filters.map((el)=> <button onClick={filterSelected} className='btn' key ={el}>{el}</button>)}
      
    </div>
  )
}

function App() {
  
  const filters=["All", "Websites", "Business Cards", "Flayers"];
  
  const [ selected, setSelected] = useState('All');

  const [ NewProjects, updateProjects ] = useState(projects);


function onSelectFilter(filterValue) { 
  setSelected(filterValue);
  // updateProjects(projects.filter((item) => {
  //   if(selected === 'All') {
  //     return projects
  //   }
  //   return item.category === selected
  // }))
      }

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

export default App;