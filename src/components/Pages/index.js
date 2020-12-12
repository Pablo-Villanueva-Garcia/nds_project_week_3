


 const NextandPreviuspage=({page ,pages ,setPage}) =>  {
   

 return(
    
    <div>Esta es la página {page+1} de {pages}
          {page > 0 && <button onClick={() => setPage(page - 1)}>Página Previa</button>}
          {page < pages && <button onClick={() => setPage(page + 1)}>Nueva Página</button>}
    </div>  
 );
 }
 
 
 
export default NextandPreviuspage;