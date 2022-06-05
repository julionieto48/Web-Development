package TravelBooking.Java;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class User {
    
    public static List<Vuelo> Vuelos = new ArrayList<>(); // lista de objetos tipo vuelo
    

    public static void procesarComandos(){
        Scanner entrada = new Scanner(System.in);

        System.out.println("******--------------- PORTAL USUARIO -------------******");
        System.out.println("   Siga la sinstrucciones de los siguientes comandos");
        System.out.println("1. Agregar Vuelo Comercial: 1&tipo&destino   tipo = Comercial ");
        System.out.println("   Agregar Vuelo Privado  : 1&tipo&destino   tipo = Privado ");
        System.out.println("2. Listado de vuelos anadidos. ");

        String comando = entrada.nextLine();
        char opcion = comando.charAt(0); //la primer seleccion del comando
        

        do{

            switch(opcion){
                case '1':
                    addVuelo(comando);
                    comando = entrada.nextLine(); // vuelve a preguntar que desea hacer
                    opcion = comando.charAt(0);
                    break;

                case '2':
                listarVuelos();
                comando = entrada.nextLine(); // vuelve a preguntar que desea hacer
                opcion = comando.charAt(0);
                break;
            }

        }while(opcion == '1' || opcion == '2' );
        entrada.close();
    }


  

    private static void addVuelo(String comando) {
        String[] comandoListado = comando.split("&") ; //array de string & caracter separador

        // cada dato se asigna a una variable
        String tipo = comandoListado[1];
        String destino = comandoListado[2];
        String aeronave = comandoListado[3];
        int numVuelo = 5;
        

              

        if(tipo.equals("Privado")){

            if(!aeronave.isEmpty()){  // si el usuario sabe mucho y puso el comando especial para selecionar la aeronave
                float precio = 320000000;
                JetsPrivados nuevoVueloPriv = new JetsPrivados(tipo, numVuelo, precio, destino, aeronave);
                Vuelos.add(nuevoVueloPriv);
            } else{
                float precio = 110000000;
                JetsPrivados nuevoVueloPriv = new JetsPrivados(tipo, numVuelo, precio, destino);
                Vuelos.add(nuevoVueloPriv);
            }
            
           
        } else if(tipo.equals("Comercial")){
            float precio = 800000;
            AvionesComerciales nuevoVueloCom = new AvionesComerciales(tipo, numVuelo, precio, destino);
            Vuelos.add(nuevoVueloCom);

        }

    }

    private static void listarVuelos() {
        System.out.println("***-- listado De vuelos --***");  // recorrer cada elemento
        Vuelos.forEach((item)->{
            System.out.print(item);
        }
        );

        
    }




    public User() {
        
    }


    

  


    


    

   
}
