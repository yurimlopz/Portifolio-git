import { valida } from "../Script/validacao.js";

const form = document.querySelector('.formulario');
const inputs = document.querySelectorAll('input');
console.log(inputs[0].validity)

form.addEventListener('submit',(event)=>{
    event.preventDefault()
})

inputs.forEach(input =>{
    input.addEventListener('blur',(evento) =>{
        return valida(evento.target);
    });
});