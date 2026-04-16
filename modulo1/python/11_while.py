print("Ciclo while")
contador=1
while contador <=5:
    print(contador)
    contador+=1
dato=""
while dato!="salir":
    dato = input("Escribe algo (salir para terminar): ")
    print("escribiste:", dato)
    
cantidad=int(input("Cuantos productos compro: "))
total=0
contador=0
while contador<=cantidad:
    precio = float(input("Precio del producto {contador}: "))
    total+=precio
    contador+=1
print("total", total)
if total >= 100:
    print("aplica descuento")
else:
    print("no aplica descuento")