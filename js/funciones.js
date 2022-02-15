export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('bg-red-100');
    if(!alerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100','text-red-700','border-red-400','rounded','px-3','py-4','mt-4','text-center','max-w-lg','mx-auto');
        alerta.innerHTML = `
        <strong class="font-bold">Error!..</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta)
        setTimeout(()=>{
            alerta.remove();
        },3000);
    }
}