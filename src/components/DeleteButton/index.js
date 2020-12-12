
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Delete = (props) =>{

      const deltask= () =>{
        
        props.setunfilteredTasks (props.unfilteredTasks.filter(x=>x.id!==props.id));
        
      }
      
  
  return(

        <button onClick={deltask}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>

  )

  };

  export default Delete;