
let pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll("#botones a");
 
for (const button of botones) {
    button.addEventListener('click', function(ev) {
        ev.preventDefault();
 
        if (ev.target.dataset.key == 'equal') {
            pantalla.textContent = eval(pantalla.textContent);
            if (pantalla.textContent.length > 8) {
                pantalla.textContent = eval(pantalla.textContent).toFixed(8);
            }
        } else if (ev.target.dataset.key == 'clear') {
            pantalla.textContent = '';
        } else {
            pantalla.textContent = pantalla.textContent + ev.target.dataset.key;
        }   
    });
}