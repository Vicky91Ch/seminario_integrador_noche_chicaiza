print("Manipulacion de listas")
print("Crear listas")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5,6]
print(numeros)
nombres=["Juan","Juana","Jose","Yamil"]
print(nombres)
mixta=[1,3,"Hello",True,"World",None,3.14]
print(mixta)
anidada=[1,2,[3,4],5,5,[4,4,[1,2,3]]]
print(anidada)

print("Acceso a los elementos de una lista")
print(nombres[1])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRUD de una lista")
frutas=["naranja","melon","banana","durazno"]
print(frutas)
#agregar
frutas.insert(1,"pera")
print(frutas)
frutas.append("papaya")
print(frutas)
frutas.extend(["kiwi","mango"])
#modificar
frutas[0]="toronja"
print(frutas)
#eliminar elementos
frutas.remove("toronja")
print(frutas)
eliminado=frutas.pop()
print(eliminado)
eliminado=frutas.pop(2)
print(eliminado)
print(frutas)
del frutas[0]
print(frutas)

print("Buscar valores en los elementos de una Lista")
print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))

print("Ordenar una lista")
numeros_desordenados=[3,2,9,5,4,1]
print(numeros_desordenados)

numeros_desordenados.sort()
print(numeros_desordenados)

numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)

ordenada=sorted(numeros_desordenados)
print(ordenada)
print(numeros_desordenados)

print("Diccionarios")
print("Crear diccionarios")
vacio={}
persona={"nombre": "Pedro", "edad":26, "ciudad":"Quito"}
config=dict(host="localhost", puerto=5432)

#acceso
print(persona["nombre"])
#modificar
persona["nombre"]="Jose"
print(persona)
del persona["edad"]
print(persona)
#verificar existencia
print("nombre" in persona)
print("ciudad" in persona)
#Metodos esenciales
print(persona.keys())
print(persona.values())
print(persona.items())
#iterear
for clave, valor in persona.items():
    print(f"clave: {clave}, valor: {valor}")