const numero_secreto = 3,
numero_introducido = document.querySelector('.numero'),
boton = document.querySelector('.boton'),
resultado = document.querySelector('.mensaje');


let contador = 0;

boton.addEventListener('click',(e) => {
    e.preventDefault()
    if(contador == 3){
        resultado.value = '😢¡Haz perdido!😢'
    }else{
        contador +=1
    }

    if (numero_introducido.value == numero_secreto) {
        resultado.value = '🎉¡Felicitaciones!🎉'
    }
})