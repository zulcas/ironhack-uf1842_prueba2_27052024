// Tu código aquí.
let counter = 0; // variable de estado es solo una. Se llama 'counter' porque contiene el valor del contador. La inicializo a 0.

// 1. Obtener el nodo donde esta el botón de incrementar
const nextBtn = document.querySelector('.nextBtn');

function updateCounter(counter) {
    // 3.2 Poner el valor de la variable en el nodo correspondiente del contador
    const displayNumber = document.querySelector('#counter');
    displayNumber.textContent = counter;

    // si es positivo, pinto verde, si es 0, pinto gris, si es negativo, pinto rojo
    if (counter > 0) {
        displayNumber.style.color = "green";
    } else if (counter == 0) {
        displayNumber.style.color = "grey";
    } else {
        displayNumber.style.color = "red";

    }
}

// 2. Asociarle el evento 'click'
nextBtn.addEventListener('click', function () {
    // 3. Comprobar por consola si me hace caso al hacer click
    console.log("Click en incrementar valor.");
    // 3.1 incrementar la variable counter
    counter++;

    // 3.2 Poner el valor de la variable en el nodo correspondiente del contador
    updateCounter(counter);
});

const prevBtn = document.querySelector('.prevBtn');

prevBtn.addEventListener('click', function () {
    counter--;

    updateCounter(counter);

});

