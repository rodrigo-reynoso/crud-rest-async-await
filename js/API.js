const url ='http://localhost:4000/clientes'
// Cuando agregamos un nuevo cliente
// functions expression
export const  nuevoCliente = async cliente =>{
    try {
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        window.location.href ='index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtengo clientes
export const obtenerClientes = async()=>{
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes;
    } catch (error) {
        console.log(error)
    }
}

// Eliminar cliente
export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
};

// Obtiene un cliente por su Id
export const obtenerCliente = async id=>{
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}
// Reescribir cliente
export const editarCliente = async cliente=>{
    try {
       // console.log(cliente,cliente.id)
       await fetch(`${url}/${cliente.id}`,{
           method:'PUT',
           body: JSON.stringify(cliente),
           headers:{
               'Content-Type':'application/json'
           }
       });
       window.location.href ='index.html';
    } catch (error) {
        console.log(error);
    }
}
