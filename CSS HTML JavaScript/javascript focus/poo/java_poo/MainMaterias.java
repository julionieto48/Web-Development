package java_poo;


import java.util.Scanner;

class MainMaterias {
    public static void main() {

        Scanner myObj = new Scanner(System.in);

        String materias[] = { " algebra" ,"cryptografia"," teoria numeros","analisis vectorial" };
        List<String> materiasDominioMaestro = new ArrayList<String>();

        System.out.println("seleccione con el caracter x las materias que domina");
        for(int i = 0; i < materias.length; i++){
            Character entrada = myObj.nextLine();

            if(entrada == 'x'){
                materiasDominioMaestro.add(materias[i]);
            }


        }
           
        Profesor educador1 = new Profesor(1024, 25, materiasDominioMaestro , "Korzakov");          

    }
}