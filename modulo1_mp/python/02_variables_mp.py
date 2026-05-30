from types import NoneType

stock_inicial=10
marca="Yamaha"
modelo="MT-07"
precio=7500.50
disponible=True
catalogo=None

print(marca, "tipo", type(marca))
print(modelo, "tipo", type(modelo))
print(precio, "tipo", type(precio))
print(disponible, "tipo", type(disponible))
print(catalogo, "tipo", type(catalogo))

marca_moto: str="Honda"
modelo_moto: str="CBR500R"
precio_moto: float=8500.00
moto_disponible: bool=True
moto_nula: NoneType=None

print(marca_moto, "tipo", type(marca_moto))
print(modelo_moto, "tipo", type(modelo_moto))
print(precio_moto, "tipo", type(precio_moto))
print(moto_disponible, "tipo", type(moto_disponible))
print(moto_nula, "tipo", type(moto_nula))