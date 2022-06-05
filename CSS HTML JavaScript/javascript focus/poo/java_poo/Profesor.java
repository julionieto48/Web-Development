import java.util.ArrayList;
import java.util.List;

public class Profesor {
    private int id,edad;
    private List<String> materiasenseñanza = new ArrayList<String>();
    private String nombre ;

    

    public Profesor(int id, int edad, List materiasenseñanza, String nombre) {
        this.id = id;
        this.edad = edad;
        this.materiasenseñanza = materiasenseñanza;
        this.nombre = nombre;
    }
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public List getMateriasenseñanza() {
        return materiasenseñanza;
    }
    public void setMateriasenseñanza(List materiasenseñanza) {
        this.materiasenseñanza = materiasenseñanza;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
    
}
