# abstraccion_motos.py
from abc import ABC, abstractmethod

class MotoBase(ABC):
    def __init__(self, marca, modelo, precio_base):
        self.marca = marca
        self.modelo = modelo
        self.precio_base = precio_base

    @abstractmethod
    def calcular_precio_final(self):
        pass

    @abstractmethod
    def obtener_descripcion(self):
        pass

    def mostrar_ficha(self):
        return (f"{self.__class__.__name__} {self.marca} {self.modelo}: "
                f"${self.calcular_precio_final():.2f}")

class MotoDeportiva(MotoBase):
    def __init__(self, marca, modelo, precio_base, cilindraje):
        super().__init__(marca, modelo, precio_base)
        self.cilindraje = cilindraje

    def calcular_precio_final(self):
        return self.precio_base * 1.15

    def obtener_descripcion(self):
        return f"Moto deportiva de {self.cilindraje}cc - Alta velocidad"

class MotoUrbana(MotoBase):
    def __init__(self, marca, modelo, precio_base, consumo):
        super().__init__(marca, modelo, precio_base)
        self.consumo = consumo

    def calcular_precio_final(self):
        return self.precio_base * 1.08

    def obtener_descripcion(self):
        return f"Moto urbana - Consumo: {self.consumo} km/l"

class MotoEnduro(MotoBase):
    def __init__(self, marca, modelo, precio_base, tipo_suspension):
        super().__init__(marca, modelo, precio_base)
        self.tipo_suspension = tipo_suspension

    def calcular_precio_final(self):
        return self.precio_base * 1.12

    def obtener_descripcion(self):
        return f"Moto enduro - Suspensión {self.tipo_suspension}"

motos = [
    MotoDeportiva("Yamaha", "YZF-R1", 18000, 998),
    MotoUrbana("Honda", "XR190L", 3500, 35),
    MotoEnduro("Kawasaki", "KLX300", 6500, "reforzada")
]

for moto in motos:
    print(moto.mostrar_ficha())

precio_total = sum(m.calcular_precio_final() for m in motos)
print(f"Precio total del catálogo: ${precio_total:.2f}")