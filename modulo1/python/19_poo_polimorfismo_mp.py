# polimorfismo_motos.py

class MetodoPago:
    def __init__(self, cliente, monto):
        self.cliente = cliente
        self.monto = monto

    def procesar_pago(self):
        raise NotImplementedError("Cada método debe implementar procesar_pago()")

    def __str__(self):
        return f"{self.__class__.__name__} - {self.cliente}"

class PagoEfectivo(MetodoPago):
    def __init__(self, cliente, monto, descuento=5):
        super().__init__(cliente, monto)
        self.descuento = descuento

    def procesar_pago(self):
        total = self.monto - (self.monto * self.descuento / 100)
        return f"Pago en efectivo de ${total:.2f} (descuento {self.descuento}% aplicado)"

class PagoTarjeta(MetodoPago):
    CUOTAS_MAX = 12

    def procesar_pago(self):
        cuota = self.monto / self.CUOTAS_MAX
        return f"Pago con tarjeta: {self.CUOTAS_MAX} cuotas de ${cuota:.2f}"

class PagoTransferencia(MetodoPago):
    def procesar_pago(self):
        return f"Transferencia bancaria de ${self.monto:.2f} - esperando confirmación"

class PagoFinanciamiento(MetodoPago):
    def __init__(self, cliente, monto, cuotas, interes_anual):
        super().__init__(cliente, monto)
        self.cuotas = cuotas
        self.interes_anual = interes_anual

    def procesar_pago(self):
        interes_mensual = self.interes_anual / 100 / 12
        cuota = (self.monto * interes_mensual * (1 + interes_mensual) ** self.cuotas) / ((1 + interes_mensual) ** self.cuotas - 1)
        total = cuota * self.cuotas
        return f"Financiamiento: {self.cuotas} cuotas de ${cuota:.2f} (total: ${total:.2f})"

def procesar_todos_los_pagos(pagos):
    for pago in pagos:
        print(f"  {pago.procesar_pago()}")

pagos = [
    PagoEfectivo("Carlos López", 7500),
    PagoTarjeta("María García", 8500),
    PagoTransferencia("Pedro Ruiz", 7200),
    PagoFinanciamiento("Ana Torres", 12000, 36, 8.5),
]

print("Procesando pagos de motos:")
procesar_todos_los_pagos(pagos)

class ReportePDF:
    def generar(self):   return "Reporte de ventas generado en PDF"
    def imprimir(self, datos): print(f"PDF generado: {datos[:30]}...")

class ReporteExcel:
    def generar(self):   return "Reporte de ventas generado en Excel"
    def imprimir(self, datos): print(f"Excel generado: {datos[:30]}...")

class ReporteHTML:
    def generar(self):   return "Reporte de ventas generado en HTML"
    def imprimir(self, datos): print(f"HTML generado: {datos[:30]}...")

def exportar_reporte(reporte):
    contenido = reporte.generar()
    print(f"Exportando: {contenido}")
    reporte.imprimir(f"ventas_motos_{contenido}")

for reporte in [ReportePDF(), ReporteExcel(), ReporteHTML()]:
    exportar_reporte(reporte)