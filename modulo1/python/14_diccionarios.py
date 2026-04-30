print("Diccionarios")
print("Crear diccionarios")
vacio={}
persona={"nombre": "Pedro", "edad": 30, "ciudad": "Quito"}
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
#Metods esenciales
print(persona.keys())
print(persona.values())
print(persona.items())
#iterar
for clave, valor in persona.items():
    print(f"clave: {clave}, valor: {valor}")