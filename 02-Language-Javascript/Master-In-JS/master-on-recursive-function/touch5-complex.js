function wallet(tk) {
     console.log(tk); 

    if (tk == 5) {
         
        return;        
    }

    wallet(tk+3); // not stop  
    // wallet(tk+3-2);   // must stop because get 5  
}

wallet(1);
