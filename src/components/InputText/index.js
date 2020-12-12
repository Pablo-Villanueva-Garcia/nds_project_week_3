import React, { useState , useEffect} from 'react';

const Inputtext = (props) => {

    
    const pendinginitial=props.unfilteredTasks.filter(unfilteredTasks => !unfilteredTasks.completed).length;
    const totalinitial=props.unfilteredTasks.length;
    const responseinitial=pendinginitial+' tareas pendientes de '+totalinitial;

    const [text,setText]=React.useState(localStorage.getItem("title"));
    const [textTitle,setTextTitle]=useState(document.title =responseinitial);

    useEffect(() => {
      //const newtitle=textTitle;

      const pendingtasks=props.unfilteredTasks.filter(unfilteredTasks => !props.unfilteredTasks.completed).length;
      const totaltasks=props.unfilteredTasks.length;
      const response=pendingtasks+' tareas pendientes de '+totaltasks;
      document.title =response
    },[text])


  


const allfuncion = () =>{
  pickupwithclick();
  plusid ();
  
}

const [newid ,setnewid]=useState(props.id);
const plusid = () => {
  setnewid(newid+1)
};



    const pickupwithclick = () => {
      const newid=props.unfilteredTasks.length+1;
        props.setunfilteredTasks ([...(props.unfilteredTasks) , { completed:false , title:text ,id:newid}]);
        setTextTitle(text);
        setText('');
    
    }
    
    return (
      <div>
          <h1>Inserte nuevas tareas</h1>
         
            <input type="text" value={text} onChange={i=>{
              setText(i.target.value)
              localStorage.setItem("title",i.target.value)
              }}/>

            <button onClick={ (allfuncion) }>Añadir Tarea</button>
           
            
               
      </div>
      
    )
  }

  export default Inputtext;