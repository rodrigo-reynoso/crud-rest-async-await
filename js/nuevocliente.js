import{mostrarAlerta} from './funciones.js';
import{nuevoCliente} from './API.js'
(function(){
    
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarFormulario);
    function validarFormulario(e){
        e.preventDefault();
   
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
        if(validarCliente(cliente)){
            mostrarAlerta('Todos los campos son obligatorios')
            return;
        }
        nuevoCliente(cliente)
        // console.log(Object.values(cliente))
    }
    function validarCliente(obj){
        return !Object.values(obj).every(input=> input !== '');
    }
})()