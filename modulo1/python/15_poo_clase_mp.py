# clase_moto.py

class Moto:
    categoria = "Vehículo de dos ruedas"

    def __init__(self, marca, modelo, precio):
        self.marca = marca
        self.modelo = modelo
        self.precio = precio

    def mostrar_info(self):
        return f"{self.marca} {self.modelo} - ${self.precio}"

    def aplicar_descuento(self, porcentaje):
        descuento = self.precio * porcentaje / 100
        self.precio -= descuento
        print(f"¡Descuento aplicado! Nuevo precio: ${self.precio:.2f}")

    def __str__(self):
        return f"Moto({self.marca}, {self.modelo}, ${self.precio})"

    def __repr__(self):
        return f"Moto(marca={self.marca!r}, modelo={self.modelo!r}, precio={self.precio!r})"

moto1 = Moto("Yamaha", "MT-07", 7500)
moto2 = Moto("Honda", "CBR500R", 8500)

print(moto1.mostrar_info())
print(moto2.mostrar_info())
moto1.aplicar_descuento(10)
print(str(moto1))
print(repr(moto2))
print(Moto.categoria)