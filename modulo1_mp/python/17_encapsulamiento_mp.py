# encapsulamiento_motos.py

class InventarioMotos:
    def __init__(self, sucursal, stock_inicial=0):
        self.sucursal = sucursal
        self.__stock = stock_inicial
        self.__movimientos = []
        self.__activo = True
        self.__registrar(f"Inventario creado con {stock_inicial} motos")

    @property
    def stock(self):
        return self.__stock

    @property
    def activo(self):
        return self.__activo

    @property
    def movimientos(self):
        return list(self.__movimientos)

    def ingresar_moto(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__stock += cantidad
        self.__registrar(f"Ingreso: +{cantidad} motos")
        return self

    def vender_moto(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__stock:
            raise ValueError(f"Stock insuficiente (disponible: {self.__stock})")
        self.__stock -= cantidad
        self.__registrar(f"Venta: -{cantidad} motos")
        return self

    def transferir(self, destino, cantidad):
        self.vender_moto(cantidad)
        destino.ingresar_moto(cantidad)
        self.__registrar(f"Transferencia a {destino.sucursal}: -{cantidad} motos")
        return self

    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__movimientos.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Inventario({self.sucursal}: {self.__stock} motos)"

inv1 = InventarioMotos("Matriz", 20)
inv2 = InventarioMotos("Sucursal Norte", 10)

inv1.ingresar_moto(5).vender_moto(2)
inv1.transferir(inv2, 3)

print(inv1)
print(inv2)
print(f"Stock Matriz: {inv1.stock} motos")

for entrada in inv1.movimientos:
    print(f"  {entrada}")