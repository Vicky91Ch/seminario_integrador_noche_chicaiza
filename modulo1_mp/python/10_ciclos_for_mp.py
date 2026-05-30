print("Ciclos for - Inventario de Motos")
print("for basico - stock por sucursal")

for i in range(1,6):
    print(f"Sucursal {i}: 5 motos disponibles")
motos_en_stock=["Yamaha MT-07","Honda CBR500R","Suzuki GSX-8R"]
for moto in motos_en_stock:
    print(moto)


print("control de interrupción - filtrando motos")
for i in range(1,10):
    if i==3: continue
    if i==7: break
    print(f"Moto #{i} disponible")
else:
    print("Catálogo terminado")


print("for con range step - cada 2 modelos")
for i in range(1,10,2):
    print(f"Modelo {i}")


print("for con range regresivo - oferta")
for i in range(10,0,-1):
    print(f"Quedan {i} motos en oferta")


print("for con enumerate - lista de modelos")
modelos=["Yamaha","Honda","Suzuki","Kawasaki"]
for indice, modelo in enumerate(modelos):
    print(indice, modelo)


print("for con zip - modelo y precio")
precios=[7500,8500,7200,6500]
for modelo, precio in zip(modelos,precios):
    print(modelo, f"${precio}")


print("for anidados - combinaciones")
for i in range(1,4):
    for x in range(1,4):
        print(f"Sucursal {i}, estante {x}")

cantidad=int(input("Ingrese cantidad de motos a registrar: "))
suma=0
for i in range(1,cantidad+1):
    precio=float(input(f"Precio moto {i} : "))
    suma+=precio
promedio=suma/cantidad
print("Precio promedio: $", promedio)
if promedio >=7000:
    print("Inventario de gama alta")
else:
    print("Inventario de gama baja")