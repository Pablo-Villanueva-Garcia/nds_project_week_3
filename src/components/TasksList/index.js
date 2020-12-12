
import Myidclone from '../CloneButton';
import Delete from '../DeleteButton';

function Task(props) {
 
  const {title, id ,unfilteredTasks, setunfilteredTasks ,completed } = props;


  return (
    <div className="xs100 mb20 flex just_SB p10">
      <label>
        <input id={id} className="" type="checkbox" checked={completed}/>


      </label>
      <span id={id} className={completed ? "throughline size20" : "size20"}>{title}</span>
      <div>
        <Myidclone id={id} title={title} done={completed} unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks} />
        <Delete id={id} title={title} done={completed} unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks} />
      </div>
     
      

    </div>
  );
}



const TaskList = ({ tasks ,unfilteredTasks , setunfilteredTasks }) => {

  
    return (
      <div className="xs100 m70 l70 ">
        {tasks.map(task => <Task unfilteredTasks={unfilteredTasks} setunfilteredTasks={setunfilteredTasks}  id={task.id} completed={task.completed} title={task.title} imageUrl={task.imageUrl} />)}
        
      </div>);
  };


  export default TaskList;