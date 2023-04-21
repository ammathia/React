import './App.css';
import { Image } from './components/img';




function ToolBar(props) {
  const {filters } = props;
  console.log(filters)
  return (
    <div className='toolbar'>
      {filters.map((el)=> <button className='btn' key ={el}>{el}</button>)}
      
    </div>
  )
}

function App() {
  return (
    <div>
      <ToolBar
      filters={['All', 'Websites', 'Bisness cards', 'Flayers']}
      selected='All'
      onSelectFilter={(filter)=> {console.log(filter)}}
       />
       <div className='container'>
        <div className='inner'>
          <Image src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg" />
          <Image src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg" />
        </div>
       </div>

    </div>
  );
}

export default App;
