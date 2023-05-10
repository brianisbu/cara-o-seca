const moneda = document.getElementById("moneda");

function flipCoin() {
    // Generar un número aleatorio (0 o 1)
    const randomNumber = Math.round(Math.random());
  
    // Agregar la clase correspondiente a la moneda
    moneda.classList.toggle('cara', randomNumber === 0);
    moneda.classList.toggle('seca', randomNumber === 1);
  
    // Reiniciar la animación
    moneda.style.animation = 'none';
    void moneda.offsetWidth;
    moneda.style.animation = null;
  }