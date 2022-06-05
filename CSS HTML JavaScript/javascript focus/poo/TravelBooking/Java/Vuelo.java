package TravelBooking.Java;

/**
 * Vuelo
 */
public class Vuelo {

    private String tipo;
    private int numVuelo;
    private float precio;
    private String destino;


    public Vuelo(String tipo, int numVuelo, float precio, String destino) {
        this.tipo = tipo;
        this.numVuelo = numVuelo;
        this.precio = precio;
        this.destino = destino;
    }

    @Override
    public String toString(){
        return   "\tTipo de vuelo: "    + tipo     + "\n"
               + "\tNumero de vuelo:  " + numVuelo + "\n"
               + "\tPrecio: "           + precio   + "\n"
               + "\tDestino: "           + destino   + "\n" ;
    }
    

    
}