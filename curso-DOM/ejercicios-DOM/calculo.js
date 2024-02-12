const euros = document.getElementById('euro'),
dolares = document.getElementById('dolar'),
boton = document.getElementById('calculo');


boton.addEventListener('click', (e) => {
    e.preventDefault()
    if(euros.value < 0) {
        alert('No se pueden introducir numeros negativos');
    }else{
        dolares.value = euros.value*2
    }
})