
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 3;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 100 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        
        alert(`Felicidades acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        
        //La condición no se cumplió
        alert('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
    }
}