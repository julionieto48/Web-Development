alert("ponle atencion a como se dibuja")

var d = document.getElementById("mi_lienzo");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();
