print("Funciones - Venta de Motos")
print("Función básica")
def bienvenida():
    print("Bienvenido a la concesionaria de motos")
bienvenida()
print("Función con parámetro")
def saludar_cliente(nombre):
    print(f"Hola: {nombre}, qué moto busca?")
saludar_cliente("Carlos")
saludar_cliente("Maria")

print("Función que devuelve valor con return")
def calcular_precio_final(precio, impuesto):
    return precio + (precio * impuesto / 100)
print(calcular_precio_final(7500, 12))

print("Función por posición y por nombre")
def registrar_moto(marca, modelo, precio):
    print(f"Moto: {marca} {modelo}, Precio: ${precio}")
registrar_moto("Yamaha", "MT-07", 7500)
registrar_moto("Honda", "CBR500R", 8500)
registrar_moto(marca="Suzuki", precio=7200, modelo="GSX-8R")


print("Función con valores de parámetros por defecto")
def cotizar(marca, precio_base, impuesto=12):
    total = precio_base + (precio_base * impuesto / 100)
    print(f"{marca}: ${total:.2f}")
cotizar("Yamaha", 7500, 15)
cotizar("Honda", 8500)
cotizar("Suzuki", 7200)

print("Función con parámetros posicionales")
def sumar_precios(*args):
    print(f"Precios recibidos {args}")
    return sum(args)
print(sumar_precios(7500, 8500))
print(sumar_precios(7500, 8500, 7200, 6500))
print(sumar_precios(10000, 20000, 30000))

print("Función parámetros combinados con posicionales")
def mostrar_catalogo(titulo, *modelos):
    print(titulo)
    for modelo in modelos:
        print(f"- {modelo}")
mostrar_catalogo("Motos deportivas", "YZF-R1", "CBR1000RR", "GSX-R1000")

print("Función parámetros clave valor variables")
def crear_ficha_moto(**kwargs):
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")
crear_ficha_moto(marca="Yamaha", modelo="MT-07", año=2024, precio=7500)

print("Función combinación con todos los tipos")
def configurar_venta(cliente, *motos, financiamiento=False, **extras):
    print(f"Cliente: {cliente}")
    print(f"Motos: {motos}")
    print(f"Financiamiento: {financiamiento}")
    print(f"Extras: {extras}")
configurar_venta("Juan Pérez", "MT-07", "CBR500R", financiamiento=True, cuotas=36, interes=8.5)

print("Devolver múltiples valores")
def minmax_precios(precios):
    return min(precios), max(precios)
minimo, maximo = minmax_precios([7500, 8500, 7200, 6500, 12000])
print(f"Mínimo: ${minimo}, Máximo: ${maximo}")
_, maximo = minmax_precios([7500, 8500, 7200])
print(f"Solo máximo: ${maximo}")
minimo, _ = minmax_precios([7500, 8500, 7200])
print(f"Solo mínimo: ${minimo}")

print("Devolver diccionario con estadísticas")
def analizar_inventario(precios):
    total = sum(precios)
    n = len(precios)
    return {
        "total": total,
        "promedio": total / n if n > 0 else 0,
        "minimo": min(precios) if precios else None,
        "maximo": max(precios) if precios else None,
        "cantidad": n,
    }

datos = [7500, 8500, 7200, 12000, 6500]
stats = analizar_inventario(datos)
print(f"Total inventario: ${stats['total']}")
print(f"Precio promedio: ${stats['promedio']}")
print(f"Rango: ${stats['minimo']} - ${stats['maximo']}")
print(f"Cantidad: {stats['cantidad']}")

print("Funciones lambda")
def aplicar_iva(precio):
    return precio * 1.12
calcular_iva = lambda x: x * 1.12
print(aplicar_iva(7500))
print(calcular_iva(8500))
descuento = lambda a, b: a - (a * b / 100)
print(descuento(7500, 10))
