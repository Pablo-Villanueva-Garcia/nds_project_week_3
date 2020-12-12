
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Myidclone = (props) =>{

      const myline= () =>{
        const newid=props.unfilteredTasks.length+1;

        console.log(newid);
        props.setunfilteredTasks ([...(props.unfilteredTasks) , {id:newid, title:props.title, done:props.done}]);
      }
      
  
  return(

        <button onClick={myline}>
          <FontAwesomeIcon icon={faClone} />
        </button>

  )

  };

  export default Myidclone;