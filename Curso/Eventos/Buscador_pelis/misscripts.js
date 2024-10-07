let selector =document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');

let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarARchivo);
selector.addEventListener('Cambiomodo', mensajemodo);
input.addEventListener('keydown', verificaInput);//sólo permitimos caracteres alfabéticos y borrado
boton.addEventListener('click', buscar);

function cambiarARchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('Cambiomodo');
    selector.dispatchEvent(evento);
}

function mensajemodo(){
    swal.fire('Modo de busqueda', 'Se ha cambiado el modo de busqueda a: ' + selector.value);
}

function verificaInput(evento){
    if((evento.keyCode < 65 || evento.keyCode > 90) && !evento.keyCode1 != 32 && evento.keyCode != 8){
        evento.preventDefault();
    }
}

function buscar(){
    lista.innerHTML = '';
    fetch(archivo)
    .then(response => response.json())  //parseamos la respuesta a json
    .then(function(salida){
        for (let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
               let p = document.createElement('p');
               p.id = item.nombre;
               p.innerHTML = item.sinopsis;
               p.style.display = 'none';

               let li=document.createElement('li');
               li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function(){
                    let p= document.getElementById(item.nombre);    
                    p.style.display = 'block';
                });
                li.addEventListener('mouseout', function(){
                    let p= document.getElementById(item.nombre);    
                    p.style.display = 'none';
                });
                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error){
        console.log('Error: ' + error);
    });
}