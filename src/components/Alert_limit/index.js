
const Alertlimit = ({tasks , page}) =>{
    const amountOfNotDone = tasks.filter(task => !task.done).length;
    const tasklimitthatanotfinish = 5;
    if (amountOfNotDone>=tasklimitthatanotfinish){
      return <div className="Alertlimit ">Llevas retraso en la pagina {page+1}!</div>
    }
    return null;
  }

  export default Alertlimit;