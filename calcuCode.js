document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('mostrar');
    let buttons = document.querySelectorAll('button');
    let times = 0;
    

    // Recorre todos los botones y agrega un listener a cada uno
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Maneja la lógica para cada botón
            times++;

            if(times==1){
                display.textContent = '';
            }
            
            
            let value = button.textContent;

            if (value === '=') {
                // Lógica para calcular el resultado al presionar '='
                try {
                    let result = eval(display.textContent);
                    display.textContent = result;
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else if (value === 'C') {
                // Lógica para borrar el contenido al presionar 'C'
                display.textContent = '___';
                times=0;
            } else {
                // Añade los valores al campo de la calculadora
                display.textContent += value;
            }
        });
    });

// Captura los eventos del teclado para habilitar el uso del teclado numérico
document.addEventListener('keydown', function(event) {
    let tecla = event.key;
    times++;

    
    if(times==1){
        display.textContent = '';
    }

    // Si es un número o un operador, actualiza el display
    if (!isNaN(tecla) || tecla === '.' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        display.textContent += tecla;
    } else if (tecla === 'Enter') {
        // Al presionar Enter, calcula el resultado
        try {
            let result = eval(display.textContent);
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Error';
        }
    } else if (tecla === 'Backspace') {
        // Al presionar Backspace, borra el último carácter
        display.textContent = display.textContent.slice(0, -1);

       
    }else if (tecla === 'C' || tecla === 'c'){
        display.textContent = '___';
                times=0;
    }



});
});

