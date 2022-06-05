# -*- coding: utf-8 -*-
"""AirBooking.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1-9DEeyBBTJwj7TJJsRTuHvttUcaNBPZK
"""

class Vuelo:
   def __init__(self, tipo, numVuelo, precio, destino):
    self.tipo = tipo
    self.numVuelo = numVuelo
    self.precio = precio
    self.destino = destino 

    def toString(self):
      print("\tTipo de vuelo: "  ,self.tipo  , "\n",
            "\tNumero de vuelo: ",self.numVuelo, "\n",
            "\tPrecio :"         ,self.precio, "\n",
            "\tDestino :"        ,self.destino,"\n",
            )

import random


class JetsPrivados(Vuelo):
  def __init__(self, tipo, numVuelo, precio, destino,aircraftPriv):
    super().__init__(tipo, numVuelo, precio, destino)

    self.tipo = tipo
    self.numVuelo = numVuelo
    self.precio = precio
    self.destino = destino

    jets = ['Eclipse 500 / 550','Cessna Citation Mustang','Cessna Citation II / IISP / SII','Dassault Falcon 100']
    
    if aircraftPriv is None:
      aircraftPriv = random.choice(jets)
      
    else:
      self.aircraftPriv = aircraftPriv
    
  def toString(self):
    print("\tTipo de vuelo: "  ,self.tipo  , "\n",
          "\tNumero de vuelo: ",self.numVuelo, "\n",
          "\tPrecio :"         ,self.precio, "\n",
          "\tDestino :"        ,self.destino,"\n",
          "\tTipo de avion :"  ,self.aircraftPriv,"\n",
            )

class AvionesComerciales(Vuelo):
  
    def __init__(self, tipo, numVuelo, precio, destino):
      super().__init__(tipo, numVuelo, precio, destino)
      self.tipo = tipo
      self.numVuelo = numVuelo
      self.precio = precio
      self.destino = destino

      aviones = ['boeing747','Boeing 777','Boeing 787 Dreamliner','A320','A380','Ilyushin Il-96']
      self.aircraftCom = random.choice(aviones)
         

    def toString(self):
      print("\tTipo de vuelo: "  ,self.tipo  , "\n",
            "\tNumero de vuelo: ",self.numVuelo, "\n",
            "\tPrecio :"         ,self.precio, "\n",
            "\tDestino :"        ,self.destino,"\n",
            "\tTipo de avion :"  ,self.aircraftCom,"\n",
            )

class User:


  def __init__(self):
    self.vuelosLista = []
    self.numVuelo = 0


  def procesarComandos(self):

    print("******--------------- PORTAL USUARIO -------------******\n" ,"   Siga la sinstrucciones de los siguientes comandos\n",
          " 1. Agregar Vuelo Comercial: 1&tipo&destino   tipo = Comercial\n ", "   Agregar Vuelo Privado  : 1&tipo&destino   tipo = Privado\n ",
          "2. Listado de vuelos anadidos.\n ", "3. Eliminar vuelo.\n ", "4. Salir.")
    
    
    
    while True:

      comando = input("ingreso:") #entra como string
      opcion = int(comando[0])

      print(comando,opcion)
              
      if opcion == 1:
        self.addVuelo(comando,self.numVuelo)
        
        
        
      elif opcion == 2:
        self.listarVuelos()
       
        
      elif opcion == 3:
        vueloElim = input("¿Que numero de vuelo desea eliminar?")
        self.eliminarVuelo(int(vueloElim))
        
      
      elif opcion == 4:
        print("***** Cerrando Sesion *****")
        break

  def addVuelo(self,comando, numVuelo):
          
    comandosSeparados = comando.split(sep='.')
    
    tipo = comandosSeparados[1]
    destino = comandosSeparados[2];
      

    if tipo == 'Privado':
      
      
      
      precio = 110000000
      aeronave = '	Bombardier Learjet 75' #aeronave por default
      nuevoVueloPriv = JetsPrivados(tipo ,numVuelo,precio,destino,aeronave)
      self.vuelosLista.append(nuevoVueloPriv)
      
      #if comandosSeparados[3] in comandosSeparados:
      #  precio = 320000000
      #  aeronave = comandosSeparados[3]; 
      #  nuevoVueloPriv = JetsPrivados(tipo,numVuelo,precio,destino, aeronave)
      #  self.vuelosLista.append(nuevoVueloPriv)

    elif tipo == 'Comercial':
      precio = 800000;
      nuevoVueloCom = AvionesComerciales(tipo,numVuelo,precio,destino)
      self.vuelosLista.append(nuevoVueloCom)
    
    self.numVuelo += 1 
       

    

  def listarVuelos(self):
    if len(self.vuelosLista) == 0:
      print( "!!!! NO ha agendado vuelos !!!!!")
    else:
      print( "***-- listado De vuelos --***")
      for i in range(len(self.vuelosLista)):
        obj = self.vuelosLista[i] 
        print(obj.toString())
          
   
    
  def eliminarVuelo(self,elim):
    if len(self.vuelosLista) == 0:
      print( "!!!! NO ha agendado vuelos !!!!!")
    elif (elim < len(self.vuelosLista) ):
      print( "Se ha eliminado ")
      print( self.vuelosLista[elim].toString() )
      self.vuelosLista.pop(elim)
    else:
      print("***** este vuelo no esta agendado. *****")




      


usuario = User()
usuario.procesarComandos()