print("Manipulación de listas - Catálogo de Motos")
print("Crear listas")
vacia=[]
print(vacia)
precios=[7500, 8500, 7200, 6500, 12000]
print(precios)
marcas=["Yamaha","Honda","Suzuki","Kawasaki"]
print(marcas)
mixta=[1, "MT-07", True, "Deportiva", None, 7500.50]
print(mixta)
anidada=[1, 2, [3, 4], 5, 5, [4, 4, [1, 2, 3]]]
print(anidada)

print("Acceso a los elementos de una lista")
print(marcas[1])
print(marcas[-1])
print(marcas[1:3])
print(marcas[::-1])

print("CRUD de una lista - inventario de motos")
motos_en_stock=["Yamaha MT-07","Honda CBR500R","Suzuki GSX-8R","Kawasaki Ninja 400"]
print(motos_en_stock)
#agregar
motos_en_stock.insert(1,"Honda XR190L")
print(motos_en_stock)
motos_en_stock.append("BMW G310R")
print(motos_en_stock)
motos_en_stock.extend(["Ducati Monster","Triumph Street Triple"])
#modificar
motos_en_stock[0]="Yamaha MT-09"
print(motos_en_stock)
#eliminar elementos
motos_en_stock.remove("Yamaha MT-09")
print(motos_en_stock)
eliminado=motos_en_stock.pop()
print(eliminado)
eliminado=motos_en_stock.pop(2)
print(eliminado)
print(motos_en_stock)
del motos_en_stock[0]
print(motos_en_stock)

print("Buscar valores en los elementos de una lista")
print("Honda" in str(motos_en_stock))
print(motos_en_stock.index("Suzuki GSX-8R") if "Suzuki GSX-8R" in motos_en_stock else "No encontrado")
print(motos_en_stock.count("Honda XR190L"))

print("Ordenar una lista - precios")
precios_desordenados=[8500, 7200, 12000, 6500, 7500]
print(precios_desordenados)

precios_desordenados.sort()
print(precios_desordenados)

precios_desordenados.sort(reverse=True)
print(precios_desordenados)

ordenada=sorted(precios_desordenados)
print(ordenada)
print(precios_desordenados)

print("Diccionarios - fichas de motos")
print("Crear diccionarios")
vacio={}
moto={"marca": "Yamaha", "modelo": "MT-07", "precio": 7500}
config=dict(host="localhost", puerto=5432)

#acceso
print(moto["marca"])
#modificar
moto["marca"]="Honda"
print(moto)
del moto["precio"]
print(moto)
#verificar existencia
print("marca" in moto)
print("precio" in moto)
#Metodos esenciales
print(moto.keys())
print(moto.values())
print(moto.items())
#iterar
for clave, valor in moto.items():
    print(f"clave: {clave}, valor: {valor}")