/*
let incremento = document.querySelector('btn');
let valor = 1;


incremento.addEventListener('click',()=>{
    ++valor;
    console.log(valor);
})

*/


var valor = 0;

function cambio(){
    
    valor += 1;
    //console.log(valor);
    
    // impares apaga
    let bulb = document.querySelector("#light");
    console.log(valor%2);
    if(valor % 2 !== 0 ){
        bulb.classList.remove("on"); // le quito el on
    } else if (valor % 2 == 0 ){
        bulb.classList.add("on");
    }

}
