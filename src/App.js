import React, { useEffect, useState } from 'react';
import './css/App.css';
import './css/estructura.css';
import TaskCounter from './components/TasksCounter';
import TaskList from './components/TasksList';
//import data from './Tasks.json';
import Alertlimit from './components/Alert_limit';
import NextandPreviuspage from './components/Pages';
import Inputtext from './components/InputText';
import Seacrch from './components/Search';
import Repository from './Repository';



function App() {

  const [unfilteredTasks,setunfilteredTasks] = useState([]); 

  useEffect(() => {
    Repository.getTasks().then(
      (response)=> {
        setunfilteredTasks(response);
      });
  },[])

 
  
  const amountOfTasks = unfilteredTasks.length;
  const [page, setPage] = useState(0);
  const pageSize = 10; 
  const pages = Math.ceil(amountOfTasks / 10);
  const [search,setsearch]=useState('');
  const filtertasks=unfilteredTasks.filter(unfilteredTasks=>unfilteredTasks.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  const tasks = filtertasks.slice(page * pageSize, (page + 1) * pageSize);

  
   return (
  <div className="flex just_center mt20 mb20">
      <div className="centrado relativo flex_dir_col ali_center">
      
      <div class="absoluto alertotal">
      

      </div>
      <div class="absoluto alert">
      <Alertlimit tasks={tasks} page={page} />
      

      </div>
      <Seacrch setsearch={setsearch} search={search}/>
      < Inputtext  unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks}/>
      
      <h1>Lista de tareas</h1>

      <TaskList unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks} tasks={tasks} />
      
      <div className="xs100 flex just_SB mt20">
        
        
        
        <div className="m20 l20 just_center flex">
          <a href="http://localhost:3000/">Ver mas</a>
        </div>
        <div className="flex just_SB xs100 m35 l40 ali_center">
          < NextandPreviuspage  page={page} pages={pages} setPage={setPage} />
        </div>
        
      </div>
      <div className="xs100 flex mt20">
      <TaskCounter  tasks={tasks} unfilteredTasks={unfilteredTasks} />
      
      </div>
      
      </div>
  </div>
  );
}
export default App;
