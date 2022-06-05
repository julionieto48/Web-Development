// arrow func 

var circleArea = (radio) =>{
    return 3.14 * radio **2;
}

let pixelToCm = p =>  (0.0264583333 * p) / (1) ;

var dibujo,lienzo;
function inicio(){
    dibujo =  document.getElementById("dibujo") ; 
    lienzo =  dibujo.getContext("2d");  // contexto object
}


//var pixel = 3;
//var pixel  = document.getElementById("pixeles").oninput; // toma vlaor de slider en pixeles
var pixel = document.querySelector('input'),
    disp  = document.querySelector('output');

disp.innerHTML = pixel.value;

pixel.addEventListener('input', function () {
    disp.innerHTML = pixel.value;
    console.log(pixel.value);

    let centimetro = pixelToCm(pixel.value);
    console.log(pixel.value,'pixeles, equivalen a', centimetro, ' centimetros.');



    var area = circleArea(centimetro);
    console.log('con', centimetro,'cms de radio el area es :', area );


    

    inicio()
    lienzo.lineWidth = 6 ;
    lienzo.beginPath();
    lienzo.arc(400,400,pixel.value,0,2 * Math.PI);
    //lienzo.arc(400, 400, 50, 0, 2 * Math.PI);
    lienzo.stroke();
    
}, false);


