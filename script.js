var i=0;

setInterval(()=>{

    document.body.style.background="linear-gradient(135deg,skyblue 0%, lightgreen "+i+"%, darkorchid 100%)";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="2000px 2000px";
    
     i++;
     
     
    if(i==100){
        
        i=0;      
               
    }
   
    
},50);
