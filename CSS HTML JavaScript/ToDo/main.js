
// seleccionar elementos
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener('click',(e) => {
    e.preventDefault();

    const text = input.value; // cuando se oprime el boton toma el texto y lo guard ane variable

    const li = document.createElement("li"); // editar el dom
    const p = document.createElement("p");
    p.textContent = text; // el valor agrgado en text se asigna al parrafo

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBtn()); //una vez se agrega el ocment tbn viene ocn su correpsondiente boton de eliminacion
    li.appendChild(addEditBtn());

    input.value = ""; // cada que s eañade un elemento a la lista se pone en blanco el input

} )


function addDeleteBtn(){  // boton de eliminar ocmentario

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"; // contneido
    deleteBtn.className = "btn-delete"; // clase asociada


    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement; // target es el boton y el parent element es quien lo contiene ul
        ul.removeChild(item); // se elimina item desd ele padre
    
        
      });

    return deleteBtn;
}


// anadir boton de editar

function addEditBtn(){
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";  //"<i class="fa-regular fa-marker"></i>"
    editBtn.className = "btn-edit"; 
    

    editBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement; // target es el boton y el parent element es quien lo contiene ul
        ul.removeChild(item); // se elimina item desd ele padre
    
        
      });

    return editBtn;

}