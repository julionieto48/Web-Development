package TravelBooking.Java;
import java.util.ArrayList;
import java.util.Random;

public class AvionesComerciales extends Vuelo {

    private  ArrayList<String> aircraftCommercial = new ArrayList<String>();
    public String setTipoAeronave(){

        aircraftCommercial.add("boeing747");
        aircraftCommercial.add("Boeing 747");
        aircraftCommercial.add("Boeing 777.");
        aircraftCommercial.add("Boeing 787 Dreamliner.");
        aircraftCommercial.add("A320");

        Random rand = new Random();
        int indiceAleatorio = rand.nextInt(aircraftCommercial.size() ) ;
        String aeronave = aircraftCommercial.get(indiceAleatorio) ;
        return aeronave;
    }

    String aeronave = setTipoAeronave();  

   

    public AvionesComerciales(String tipo, int numVuelo, float precio, String destino) {
        super(tipo, numVuelo, precio, destino);
         
    }



    public ArrayList<String> getAircraftCommercial() {
        return aircraftCommercial;
    }

    

    @Override
    public String toString(){
        
        return   super.toString() + "\tAeronave en que viaja : "    + this.aeronave + "\n";
    }



    

    
    

}
