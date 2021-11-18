class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;

        this.calculator = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined; // operacion que esta usando el usuario 

    }


    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual ;
        this.displayValorAnterior.textContent = this.valorAnterior ;

    }

    agregarNumero(numero){
        if(numero=='.' && this.valorActual.includes('.'))return  //si presiono punto y y ahabi apunto?  retorna vacio
        // this.valorActual = this.valorActual +  numero;  // concateno todas las entradas 
        this.valorActual = this.valorActual.toString() +  numero.toString();

        this.imprimirValores();
    }

 

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores(); // se actualiza
    }


    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';  
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior); // para poder operar pasar a float
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) ||isNaN(valorActual) ) return
        this.valorActual = this.calculator[this.tipoOperacion](valorAnterior,valorActual)   // llamo al objeto calculadora

        
    }


    computar(tipo){

        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo ; // la operacion es igual al tipo de operacion o comando que se acaba de recibir
        this.valorAnterior = this.valorActual || this.valorAnterior; // cuando se clacula se actualiza vlaor actual, valor anterior(el de arriba)
                                                                     // si no hay vlaor actual solo se cambia el operador
        this.valorActual = '' ;  // se elimina el campo de vlaor actual 
        this.imprimirValores();
    }
}