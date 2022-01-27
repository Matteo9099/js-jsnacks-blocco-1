
let numero;
let utente = parseInt(prompt('Inserisci fino a che numero'));

let i = 0;

while(i<utente){
    numero = parseInt(prompt('Inserire un numero'));

    console.log("Cubo di " + numero + ": " +Math.pow(numero, 3));

    i++;
}
