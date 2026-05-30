print("Match - case")
comando=input("Comando iniciar/parar/reiniciar: ")
match comando:
    case "iniciar":
        print("Sistema iniciando...")
    case "parar":
        print("Sistema deteniendose...")
    case "reiniciar":
        print("Sistema reiniciando...")
    case _:
        print(f"Comando {comando} no valido")


print("Match - con condiciones")
numero=int(input("Incluye numero: "))
match numero:
    case n if n<0:
        print(f"{n} es negativo")
    case 0:
        print("Es cero")
    case n if n%2==0:
        print(f"El número {n} es positivo y par")
    case n:
        print(f"El número {n} es positivo e impar")