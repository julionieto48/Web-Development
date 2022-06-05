// poo in javascript 

class Circunferencia{
    constructor(x,y,radio) {
        this.x = x;
        this.y = y;
        this.radio = radio;
      }

}

const objeto = new Circunferencia();

class Elconstructor{
    nombre = "";
    edad = 0 ;
    anoactual = 2022;
    

    constructor(nombre, _edad){
        this.nombre = nombre;
        this.edad = _edad;
        
    }

    get AnoNacimiento(){
        var anoNacimiento;
        anoNacimiento = this.anoactual - this.edad ;
        return anoNacimiento
    }
    
    mostrar = function(){
        console.log("Nombre:" + this.nombre  +"\n Edad: " + this.edad + "\n Año de nacimiento : " + anoNacimiento() );
    }
}

let obj1 = new Elconstructor("Santiago",26);
console.log(obj1.AnoNacimiento) ; 
console.log(obj1.mostrar) ;

//___________________________________

class comida{

    constructor(idTienda,nombre, fabricante,fechaVencimiento,precio){
        this.idTienda = idTienda;
        this.nombre = nombre;
        this.fabricante = fabricante;
        this.fechaVencimiento = fechaVencimiento;
        this.precio = precio
    };

    

    venta = function(unidades){};
    disponibilidad = ()=>{};
    

    
}

//___________________________________

class Mamifero{
    constructor(numeroPatas, numeroOjos,velocidad,nombre ){
        this.numeroOjos = numeroOjos;
        this.numeroPatas = numeroPatas;
        this.velocidad = velocidad;
        this.nombre = nombre;
    }

    amamantar = function(){
        console.log(`${this.nombre} da de comer a sus cachorros.` );
    };
    mudarPelaje(tiempo){
        this.tiempo = tiempo;

        console.log(`${this.nombre} muda su pelaje cada ${tiempo} meses .` );
    };

    extremidades = function(){
        console.log(`${this.nombre} tiene  ${this.numeroPatas} extremidades.` );
    };
    
}

class Perro extends Mamifero{
    constructor(caza, olfato){
        super();
        this.caza = caza;
        this.olfato = olfato;
    }

    correr(velocidad){
        this.velocidad = velocidad;
        console.log(`${this.nombre} corre a velocidad  ${velocidad}.` );
    }
}

let conejito = new Mamifero(4,2,200,"Bugs");
conejito.extremidades();
conejito.mudarPelaje(5);

let border = new Perro(4,2,150,"Kaia");
border.correr(127);
border.extremidades();

//____________________________ encpsulacion - geters y seters


