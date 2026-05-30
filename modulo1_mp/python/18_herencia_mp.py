# herencia_motos.py

class MotoBase:
    def __init__(self, marca, modelo, año):
        self.marca = marca
        self.modelo = modelo
        self.año = año
        self._kilometraje = 0

    def recorrer(self, km):
        self._kilometraje += km
        return self

    def __str__(self):
        return f"{self.marca} {self.modelo} ({self.año}) - {self._kilometraje} km"

class MotoDeportiva(MotoBase):
    def __init__(self, marca, modelo, año, velocidad_max):
        super().__init__(marca, modelo, año)
        self.velocidad_max = velocidad_max

    def activar_turbo(self):
        return f"{self.marca} {self.modelo}: ¡Turbo activado! Velocidad máx: {self.velocidad_max} km/h"

    def __str__(self):
        return f"{super().__str__()} - Deportiva ({self.velocidad_max} km/h)"

class MotoUrbana(MotoBase):
    def __init__(self, marca, modelo, año, consumo):
        super().__init__(marca, modelo, año)
        self.consumo = consumo

    def modo_ahorro(self):
        return f"{self.marca} activa modo ahorro de combustible"

    def __str__(self):
        return f"{super().__str__()} - Urbana ({self.consumo} km/l)"

class MotoElectrica(MotoDeportiva):
    def __init__(self, marca, modelo, año, autonomia):
        super().__init__(marca, modelo, año, velocidad_max=180)
        self.__autonomia = autonomia
        self.__bateria = 100

    def cargar(self, porcentaje=100):
        self.__bateria = min(100, self.__bateria + porcentaje)
        return self

    @property
    def autonomia_restante(self):
        return self.__autonomia * self.__bateria / 100

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Batería: {self.__bateria}% | "
                f"Autonomía: {self.autonomia_restante:.0f}km")

moto_electrica = MotoElectrica("LiveWire", "S2 Del Mar", 2024, 200)
moto_electrica.recorrer(50)
print(moto_electrica)

print(isinstance(moto_electrica, MotoElectrica))
print(isinstance(moto_electrica, MotoDeportiva))
print(isinstance(moto_electrica, MotoBase))
print(isinstance(moto_electrica, MotoUrbana))

print(MotoElectrica.__mro__)