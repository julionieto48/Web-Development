package java_poo;

/* pq se usa la palabra this? */

public class ElConstructor {
    
    private String nombre;
    private int edad;

    /*
    public ElConstructor(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }*/

    public ElConstructor(String _nombre_, int _edad_){
        nombre = _nombre_ ;
        edad = _edad_ ; 

    }

    public void display(){
        System.out.println(nombre + " tiene " + edad + " años de edad." );

    }

    
}




class Main {
    public static void main(String[] args) {
      System.out.println("Hello world!");
      ElConstructor objeto1 = new ElConstructor("juan japones ",15);

      objeto1.display();

    }
}