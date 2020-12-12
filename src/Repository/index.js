const url = 'http://jsonplaceholder.typicode.com/todos';



const getTasks = async () => {
    try{
      return await fetch (url,{method:'GET'}).then((response)=>response.json());
    }catch(e){
        console.log(e);
    }
  
}


export default {
    getTasks,
}