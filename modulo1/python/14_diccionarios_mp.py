print("Diccionarios - Catálogo de Motos")
print("Crear diccionarios")
vacio={}
moto={"marca": "Yamaha", "modelo": "MT-07", "precio": 7500, "stock": 5}
config=dict(marca="Honda", modelo="CBR500R", precio=8500)

#acceso
print(moto["marca"])
#modificar
moto["marca"]="Suzuki"
print(moto)
del moto["stock"]
print(moto)
#verificar existencia
print("marca" in moto)
print("stock" in moto)
#Metodos esenciales
print(moto.keys())
print(moto.values())
print(moto.items())
#iterar
for clave, valor in moto.items():
    print(f"clave: {clave}, valor: {valor}")