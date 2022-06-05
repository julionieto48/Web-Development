var listaamigos = [];

function anadirAmigoEnSistema(pid , pnombre , pmobil , pcumpleaños , pemail){
    var nuevoAmigo = {
        cedula : pid,
        nombre : pnombre,
        mobil : pmobil,
        cumpleaños: pcumpleaños,
        email: pemail 
    };

    console.log(nuevoAmigo);
    //console.log(listaamigos);
    listaamigos.push(nuevoAmigo);
    
}


var  getListaAmigos = function(){
    //console.log(listaamigos);
    return listaamigos;
}
