
const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input =>{
    console.log(input)

    input.addEventListener('blur',(evento) =>{
        console.log('validao')
    })


});