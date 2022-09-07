from kivy.app import App
from kivy.uix.widget import Widget
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager, Screen 

#Define our different screens
class Bienvenido(Screen):
	pass

class IniciaProceso(Screen):
	pass
	
class ElegirCandidato(Screen):
	pass

class ConfirmarVoto(Screen):
	pass

class WindowManager(ScreenManager):
	pass

# Designate Our .kv design file 
kv = Builder.load_file('wind.kv')


class AwesomeApp(App):
	def build(self):
		return kv

if __name__ == '__main__':
	AwesomeApp().run()

