const cliente = document.getElementById('username'),
material = document.getElementById('material'),
dimension = document.getElementById('dimension'),
comentario = document.getElementById('comentario'),
boton = document.getElementById('boton'),
resultado = document.getElementById('resultado');



boton.addEventListener('click', (e) => {
    e.preventDefault()
    //resultado.value = `${cliente.value} ha ordenado una caja de ${material.value} con unas dimensiones ${dimension.value}.${comentario.value}`;
    alert(`${cliente.value} ha ordenado una caja de ${material.value} 
    con unas dimensiones ${dimension.value}. ${comentario.value}`);
})
