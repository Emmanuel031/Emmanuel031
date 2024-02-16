let tarea = document.getElementById('TareaNueva'),
agregar = document.getElementById('agregarTarea'),
lista = document.getElementById('lista-tareas'),
aviso = document.querySelector('.ceroTareas');

console.log(tarea.innerHTML);

agregar.addEventListener('click',(e) => {
    e.preventDefault()
    if (tarea.value == '') {
        console.log('Está vacío');

    } else {
        let nuevaTarea = tarea.value
        let nuevoItem = document.createElement('li');
        nuevoItem.textContent = nuevaTarea
        lista.appendChild(nuevoItem);
        tarea.value = null;
    
        if (lista.firstElementChild == aviso) {
            lista.removeChild(aviso)
        }
    }
    
})