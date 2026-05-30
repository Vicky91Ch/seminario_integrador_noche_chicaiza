print("Ciclo while - Ventas de Motos")
contador=1
while contador <=5:
    print(f"Moto en exhibición #{contador}")
    contador+=1
dato=""
while dato!="salir":
    dato = input("Ingrese marca de moto (salir para terminar): ")
    print("moto registrada:", dato)
    
cantidad=int(input("Cuantas motos compro el cliente: "))
total=0
contador=0
while contador<=cantidad:
    precio = float(input(f"Precio de la moto {contador}: "))
    total+=precio
    contador+=1
print("Total a pagar: $", total)
if total >= 100000:
    print("Aplica descuento por compra al por mayor")
else:
    print("No aplica descuento")