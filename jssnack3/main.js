let numero;
let somma = 0;
let media;

for(let i=0; i<10; i++){
    numero = parseInt(prompt('Inserire un numero'));

    if(isNaN(numero)){
        alert('Inserisci un numero valido!');
    }

    somma = parseInt(numero) + somma;
    media = somma / 10;

}

alert('Somma di tutti i numeri: ' + somma);
alert('Media numeri: ' + media);