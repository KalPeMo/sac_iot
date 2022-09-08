
import kivy
from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
import os


from kivy.uix.widget import Widget
from kivy.graphics import Rectangle
from kivy.core.window import Window

from kivy.uix.popup import Popup 
from kivy.uix.label import Label 
from kivy.config import Config 
from kivy.lang import Builder

class SAC_IOT(App):



    ''' DENTRO DE LA CARPETA CANDIDATOS ALMACENAMOS LAS IMAGENES DE LOS CANDIDATOS'''
    nombre_carpeta='candidatos'
    listaCandidatos = os.listdir(nombre_carpeta)
    for elemento in listaCandidatos:
    	print(os.path.join(nombre_carpeta, elemento))
    ''' https://www.codigopiton.com/como-listar-archivos-de-carpeta-en-python/ '''	
    
    with open("candidatosRegistrados.txt","w") as file:
    	for elemento in listaCandidatos:
 	   	file.write(elemento+"\n")

    def build(self):


            
        layout = GridLayout(cols = 2)
        
        archivo1='1.jpg'
        bot1=Button(text ="¡ VOTA POR MI !",
                     color =(1, 1, 1, 1),
                     background_normal = archivo1,
                     background_down ='Bender.png',
                     size_hint = (.3, .3),
                     pos_hint = {"x":0.35, "y":0.3}
                   )

        layout.add_widget(bot1)
        bot1.bind(on_press = self.onButtonPress) 

        
        archivo2='2.jpg'
        bot2=Button(text ="¡ VOTA POR MI !",
                     color =(1, 1, 1, 1),
                     background_normal = archivo2,
                     background_down ='Bender.png',
                     size_hint = (.3, .3),
                     pos_hint = {"x":0.35, "y":0.3}
                   )

        layout.add_widget(bot2)
        bot2.bind(on_press = self.onButtonPress) 


        
        archivo3='3.jpg'
        bot3=Button(text ="¡ VOTA POR MI !",
                     color =(1, 1, 1, 1),
                     background_normal = archivo3,
                     background_down ='Bender.png',
                     size_hint = (.3, .3),
                     pos_hint = {"x":0.35, "y":0.3}
                   )

        layout.add_widget(bot3)
        bot3.bind(on_press = self.onButtonPress) 


        
        archivo4='4.jpg'
        bot4=Button(text ="¡ VOTA POR MI !",
                     color =(1, 1, 1, 1),
                     background_normal = archivo4,
                     background_down ='Bender.png',
                     size_hint = (.3, .3),
                     pos_hint = {"x":0.35, "y":0.3}
                   )

        layout.add_widget(bot4)
        bot4.bind(on_press = self.onButtonPress) 



        
        archivo5='5.jpg'
        bot5=Button(text ="¡ VOTA POR MI !",
                     color =(1, 1, 1, 1),
                     background_normal = archivo5,
                     background_down ='Bender.png',
                     size_hint = (.3, .3),
                     pos_hint = {"x":0.35, "y":0.3}
                   )

        layout.add_widget(bot5)
        bot5.bind(on_press = self.onButtonPress) 


        layout.add_widget(Button(text ="VOTA EN BLANCO",
                     color =(1.2, 1.4, 1.5, 1),
                     background_normal = 'blanco.png',
                     background_down ='Bender.png',
                     size_hint = (.3, .3),
                     pos_hint = {"x":0.35, "y":0.3}
                   ))    




        return layout


        
    def onButtonPress(self, button): 
          
        layout = GridLayout(cols = 1, padding = 10) 
  
        popupLabel = Label(text = "ESTÁ SEGURO DE VOTAR POR MI") 
        ACEPTO = Button(text = "SI") 
        REGRESAR = Button(text = "NO") 
  
        layout.add_widget(popupLabel) 
        layout.add_widget(ACEPTO)        
        layout.add_widget(REGRESAR)
          
        popup = Popup(title ='CANDIDATO A', content = layout)   
        popup.open()    
  
        
        ACEPTO.bind(on_press = popup.dismiss)    
        REGRESAR.bind(on_press = popup.dismiss)    
 
root = SAC_IOT()
root.run()
