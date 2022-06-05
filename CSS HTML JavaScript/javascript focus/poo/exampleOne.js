
// object literal notation ... llave valor

let user = {
    nombre: 'juan',
    edad: 25,
    email: 'ddksk@gmail.com',
    ubicacion: 'Cartagena' ,
    blogs: ['camino a la universidad','10 alimentos que toma mike tyson ']
    
};

console.log(user);

// acceder a propiedades . objectName.propertyName   objectName['propertyName'] 

console.log(user.email);

console.log(user['ubicacion']);

// modificar valor de una propiedad
user.edad = '35';
user.ubicacion = 'Bogota';
user['nombre'] = 'shang chi';

const key = 'si';
console.log(user[key]);

console.log(user.ubicacion);

// add and delete properties   delete objectName.propertyName;

user.barrio = 'Bossa';

delete user.email;

console.log(user);


// añadir metodos _________________________

let adm = {
    empresa:  'anthrax',
    edad: 34,
    responsabilidades: ['limpiar escritorio','repasar datos'],

    modificarUser(){
        console.log('¿que usuario desea modificar?');
    },
    saberResponsabilidades(){
        // console.log(this.responsabilidades); // this = context object , representa el contexto en el que se ejecuta el codigo
        console.log('admnistrador tiene estas responsabilidades: ');
        this.responsabilidades.forEach(responsabilidad => {  // usando callback function 
            console.log(responsabilidad);
        })
    }
};

adm.modificarUser();
adm.saberResponsabilidades();

// string method como  ejemplo
const nombre = 'Juan';
nombre.toUpperCase();

//___________ pruebas_____________________

let cliente = {
    nombre: 'Pepita',
    telefono: '3487589748',
    cedula: 1034578212147
}

var listaProveedores = [
    {nombre: 'HectorMax', tel: '3127568978', servicio:'empanadas'},
    {nombre: 'siperMin' , tel: '3427567978', servicio:'sillas'},
    {nombre: 'instaMax' , tel: '3337568774', servicio:'fotos'}
]

console.log(listaProveedores[0].servicio)

// dinamico 

var listaEmpleados = [];

var tipoEmpleado = ['servicios genrales' , 'seguridad' , 'mantenimiento'];

var nombres = ['juana', 'juanita','tomas','eustaquio', 'oliver atom'];

nombres.forEach(function(entrada){
    var objetoSencillo = {};

    objetoSencillo['nombre'] = entrada;
    objetoSencillo['tipo_de_empleado'] = tipoEmpleado[Math.floor(Math.random()*tipoEmpleado.length)];
    objetoSencillo['edad'] = window.prompt("inrese edad de  " + entrada + ": ")

    listaEmpleados.push(objetoSencillo);
});

console.log(listaEmpleados);