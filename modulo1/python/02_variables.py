from types import NoneType

max_intentos=3
nombre="Juan Nuñez"
edad=28
altura=1.65
activo=True
nulo=None

print(nombre, "tipo", type(nombre))
print(edad, "tipo", type(edad))
print(altura, "tipo", type(altura))
print(activo, "tipo", type(activo))
print(nulo, "tipo", type(nulo))

nombre_apellido: str="Juan Nuñez"
edad_trabajador: int=28
altura_trabajador: float=1.65
trabajador_activo: bool=True
nulo_trabajador: NoneType=None

print(nombre_apellido, "tipo", type(nombre_apellido))
print(edad_trabajador, "tipo", type(edad_trabajador))
print(altura_trabajador, "tipo", type(altura_trabajador))
print(trabajador_activo, "tipo", type(trabajador_activo))
print(nulo_trabajador, "tipo", type(nulo_trabajador))