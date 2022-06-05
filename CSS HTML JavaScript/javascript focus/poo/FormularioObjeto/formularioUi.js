
// La lógica de interfaz es la que debería llamar a la lógica de negocio respectiva con su función.
document.querySelector('#btnGuardarAmigo').addEventListener('click', guardarAmigo); // al dar click se eejcuta la funcion propia del ui
dibujarTablaAmigos();

function guardarAmigo(){
    var sId = document.querySelector('#txtId').value,
        sNombre = document.querySelector('#txtName').value,
        sMobil = document.querySelector('#txtMobil').value,
        sCumple = document.querySelector('#txtCumpleaños').value,
        sMail = document.querySelector('#txtMail').value;
    
    anadirAmigoEnSistema(sId , sNombre , sMobil , sCumple , sMail);
    dibujarTablaAmigos();
}

// _____________ rellenar tabla d eamigos

function dibujarTablaAmigos(){
    
    var lista = lista = getListaAmigos(),
         tbody = document.querySelector('#tablaAmigos tbody');
    
        tbody.innerHTML = ''; // limpia la info

        for(var i = 0; i < lista.length; i++){
            var row = tbody.insertRow(i);

            var idCelda = row.insertCell(0),
                nameCelda = row.insertCell(1),
                mobilCelda = row.insertCell(2),
                cumpleCelda = row.insertCell(3),
                mailCelda = row.insertCell(4);
            
            var selectCelda = row.insertCell(5);
            
            idCelda.innerHTML = lista[i].cedula;
            nameCelda.innerHTML = lista[i].nombre;
            mobilCelda.innerHTML = lista[i].mobil;
            cumpleCelda.innerHTML = lista[i].cumpleaños;
            mailCelda.innerHTML = lista[i].email;
             


            // crear casilla de seleccion
            var inputSelect = document.createElement('input');
            inputSelect.type = 'radio';
            inputSelect.value = lista[i].cedula;
            selectCelda.appendChild(inputSelect);


            tbody.appendChild(row);

        }
}


// ______________ verificacion campos
const form = document.getElementById('form');
const id = document.getElementById('txtId');
var nombre = document.getElementById('txtName');
const mobil= document.getElementById('txtMobil');
const cumple= document.getElementById('txtCumpleaños');
const mail = document.querySelector('#txtMail');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});


function checkInputs(){
    const cedulavalor =id.value.trim();
    var nombrevalor =nombre.value.trim();
    const mobilvalor =mobil.value.trim();
    const cumplevalor = cumple.value.trim();
    const mailvalor = mail.value.trim();

    // verificar nombre 
    if (nombrevalor === '') {
        setErrorFor(nombre , 'Este campo no puede estar vacio' )
    }else{
        setSuccessFor(nombre);

    }
}

function setErrorFor(entrada, mensaje){
    const formGroup = entrada.parentElement; // .form-group 
    const small = formGroup.querySelector('small');

    // anadir msj de error dentro de small
    small.innerText = mensaje;

    // anadir clase error html css
    formGroup.className = 'form-group error';

}

function setSuccessFor(entrada){
    const formGroup = entrada.parentElement; // .form-group 
  
    // anadir clase error html css
    formGroup.className = 'form-group success';

}