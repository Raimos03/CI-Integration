
function imprime(n){
    let i=0;
    for (i;i<=n;i++){
        
        if(i%2!=0){
            console.log(`${i} - numero primo`);
        }
        else{
            
            console.log(i);
        }
    }

    return;
}



//-----------main-----

imprime(10);