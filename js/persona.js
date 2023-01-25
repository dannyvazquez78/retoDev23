import { post } from './getData.js'

const form = document.querySelector('form');
const submit = document.querySelector('button');


const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let objetoFinal = {};
    Array.from(form).forEach((elemento) =>{
        objetoFinal[elemento.name] = elemento.value;
    });
    if(validacion(objetoFinal)){
        post(objetoFinal)
        alert('se actualizo correctamente')
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
});