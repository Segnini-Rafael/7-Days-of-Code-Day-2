//  Preguntar nombre

let nombre = prompt("¿Cuál es tu nombre?");

//  Preguntar edad

let edad = prompt("¿Cuál es tu edad?");

// preguntar lenguaje

let lenguaje = prompt("¿Cuál es tu lenguaje de programación estas estudiando?");

// mensaje final

let mensaje = `Hola ${nombre}, veo que tienes ${edad} años y estas estudiando ${lenguaje}.`;

alert(mensaje);

let pregunta = prompt('¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.');

if (pregunta === '1') {
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
} else {
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}