package TravelBooking.Java;
import java.util.Scanner;

class MainMenu{

    private static void menu() {
        System.out.println("1. Portal Usuarios. ");
        System.out.println("2. Portal Administrador. ");

        Scanner key = new Scanner(System.in);
        int opcion = key.nextInt();

        switch(opcion){

            case '1':
                User.procesarComandos();
                break;
        }
        key.close();
    }

    public static void main(String[] args) {
        menu();
    
    }

    

}

