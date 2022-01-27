let numero;
let somma = 0;

for(let i=0; i<10; i++){
    numero = parseInt(prompt('Inserire un numero'));

    if(isNaN(numero)){
        alert('Inserisci un numero valido!');
    }

    somma = parseInt(numero) + somma;

}

alert('Somma di tutti i numeri: ' + somma);