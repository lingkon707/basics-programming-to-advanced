// only-when-touch5-stop
function wallet(tk) {
     console.log(tk); 

    if (tk === 5) {
         
        return;        
    }

    wallet(tk+2);    
}

wallet(1);
