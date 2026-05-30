print("Match - case para tipo de moto")
tipo_moto=input("Tipo de moto (deportiva/urbana/turismo/enduro): ")
match tipo_moto:
    case "deportiva":
        print("Moto de alta velocidad y rendimiento")
    case "urbana":
        print("Moto ideal para ciudad")
    case "turismo":
        print("Moto cómoda para viajes largos")
    case "enduro":
        print("Moto para todo terreno")
    case _:
        print(f"Tipo {tipo_moto} no disponible")


print("Match - con condiciones (rango de precios)")
precio=int(input("Ingrese precio de la moto: "))
match precio:
    case n if n<3000:
        print(f"${n} - Moto económica")
    case 0:
        print("Precio no válido")
    case n if n<=10000:
        print(f"${n} - Moto de gama media")
    case n:
        print(f"${n} - Moto de gama alta")