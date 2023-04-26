import './App.css';

import React, {useState} from 'react';
import { projects } from './components/projects';



function ProjectList(props) {
  const { projects } = props;
  return(
      <>
          {projects.map((el, id) => { return <div className='element'>
             <img key={id} src={el.img} alt="smth"></img> </div>})}
          </>
         
  )
}

function ToolBar(props) {
  const {filters} = props;

  const  filterSelected = (event) => {
    console.log(event.target.innerText)
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

  console.log(selected)


const onSelectFilter = (filterValue) => {
  setSelected(filterValue);
  console.log(selected)
  updateProjects (projects.filter((item) => {
    if (selected === 'All') {
        return projects
        } else {
          return item.category === selected
            }
          }))
      }

//   const  FilterValue = NewProjects.filter((item)=> {
//     if (selected === 'All') {
//       return projects
//       } else {
//         return item.category === selected
//           }
// })
      

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
