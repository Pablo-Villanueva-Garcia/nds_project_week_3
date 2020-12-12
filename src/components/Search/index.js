import React from 'react';

const Seacrch = (props) => {


    return (
      <div>
          
            <input type="text" placeholder='Que estas buscando' onKeyPress={e=>{
              if(e.code==='Enter'){
                props.setsearch(e.target.value);
                
              }
            }}/>

            
            
               
      </div>
      
    )
  }

  export default Seacrch;