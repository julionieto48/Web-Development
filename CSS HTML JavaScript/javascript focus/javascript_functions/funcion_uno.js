

saludar();
// declaracion d efuncion
function saludar(){
    console.log('hola perro');
}
saludar();

// hablar();
// function expresion cuando sale el  =   const no permite le override
var hablar =  function(){
    console.log('como vamos');
}; // store functrion in variables  override the function 

hablar();

// el temirno de hoisting no funciona con function expressions  y eso cambia la forma en que aparece la funcion invocada

// pasar valores  mirando function overide and ovelroad  //


const dialogo =  function(nombre){
    console.log('como vamos .. ${nombre}');
}; // store function in variables  override the function 

dialogo('Pepo');



var hablar = function(nombre, tiempo = 'tarde'){
    console.log("como vamos .. ${nombre}, buena ${tarde}");
}


var hablando = hablar('coqui');


// calculo imc ..... indice masa corporal 

const calculoImc = function(peso,estatura){

    var imc = parseFloat(peso) / (parseFloat(estatura) ** 2)
    var status = false;

    check1.addEventListener("click", function(){
        if(check1.isChecked){
            status = true;
            calculo.style.visibility = "visible";
        }else{
            status = false;
            calculo.style.visibility = "hidden";
        }
    },false)

    //var status = getChecked() ;

    console.log("status = " + status);

    if(status == true ){
        document.getElementById("indice") == "Tu indice de masa corporal es: " + imc ; 
    }else if(status == false ){
        console.log("Acepte terminos y condiciones.");
    }

    //return imc;
}

//var  indiceToTable = calculoImc( document.getElementById('peso'), document.getElementById('estatura') );
//console.log(indiceToTable);

function getChecked() {
    var isChecked = new Boolean(false);
    const checkBox = document.getElementById('check1').checked;
    if (checkBox === true) {
      console.log(true);
      } else {
        console.log(false);
    }
    return isChecked;

}