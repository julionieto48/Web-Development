package TravelBooking.Java;
import java.util.ArrayList;
import java.util.Random;

public class JetsPrivados extends Vuelo {

    
    private  ArrayList<String> jets = new ArrayList<String>();
     // en caso de ser selccion al azar override metodo constructor ... el usuario puede escoger su nave privada o se asigna al azar
     public String setTipoAeronave(){
        jets.add("Eclipse 500 / 550");
        jets.add("Cessna Citation Mustang");
        jets.add("Cessna Citation II / IISP / SII");
        jets.add("Dassault Falcon 100");

        Random rand = new Random();
        int indiceAleatorio = rand.nextInt(jets.size() ) ;
        String aeronave = jets.get(indiceAleatorio) ;
        return aeronave;
    }
    
    private String aircraftPriv = setTipoAeronave();


    public JetsPrivados(String tipo, int numVuelo, float precio, String destino, String aircraftPriv) {
        super(tipo, numVuelo, precio, destino);
        this.aircraftPriv = aircraftPriv; 
    }

        
    public JetsPrivados(String tipo, int numVuelo, float precio, String destino) {
        super(tipo, numVuelo, precio, destino);
    }




    public ArrayList<String> getJets() {
        return jets;
    }

   

    @Override
    public String toString(){
        
        return   super.toString() + "\tAeronave en que viaja : "    + aircraftPriv   + "\n";
    }

    

    
}
