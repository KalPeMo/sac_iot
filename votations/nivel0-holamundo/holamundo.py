

import kivy
kivy.require('1.0.7')

from kivy.app import App
from kivy.uix.button import Button

class TestApp(App):

    def build(self):
        # return a Button() as a root widget
        return Button(text='BIENVENIDOS A S.A.C-IoT \n \nSOMOS EL SISTEMA DE VOTACIONES MÁS SEGURO DEL MUNDO')


if __name__ == '__main__':
    TestApp().run()
