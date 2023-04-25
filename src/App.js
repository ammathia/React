import './App.css';

import React, {useState} from 'react';
import { projects } from './components/projects';



function ProjectList(props) {
  const { projects } = props;
  return(
      <>
          {projects.map((el, id) => { return <img key={id} src={el.img} alt="smth"></img>})}
          </>
         
  )
}

function ToolBar(props) {
  const {filters} = props;

  function filterSelected(event) {
    props.onSelectFilter(event.target.innerText)
    console.log(event.target.innerText)
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

  console.log(selected)


function onSelectFilter(filterValue) {
  setSelected(filterValue);
  console.log(selected)
  updateProjects ( projects.filter((item) => {
      if (selected === 'All') {
          return projects
          } else {
            return item.category === selected
              }
            }))
        
        
      }
      



  return (
    <div>
      { <ToolBar
      filters={filters}
      selected={selected}
      onSelectFilter={onSelectFilter}
       /> }
      
       <div className='container'>
        

        <div className='inner'>
          <ProjectList projects={NewProjects} />
        </div>

       </div>

    </div>
  );
}

export default App;
