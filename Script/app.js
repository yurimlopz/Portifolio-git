import { valida } from "../Script/validacao.js";

const inputs = document.querySelectorAll('input');

inputs.forEach(input =>{
    input.addEventListener('blur',(evento) =>{
        return valida(evento.target);
    });
});