print("Condicional if - Venta de Motos")


print("if Simple")
stock_motos=3
if stock_motos>0:
    print("Moto disponible en stock")


print("if else - dos caminos")
presupuesto=25000
if presupuesto>=50000:
    print("Puede comprar la moto")
else:
    print("Presupuesto insuficiente")


print("if multiples condiciones - categoría de moto")
cilindraje=600
if cilindraje<200:
    print("Moto de baja cilindrada")
elif cilindraje<500:
    print("Moto de media cilindrada")
else:
    print("Moto de alta cilindrada")


print("if condiciones anidadas - validar compra")    
licencia=True
verificacion_edad=False
if licencia:
    if verificacion_edad:
        print("Venta autorizada")
    else:
        print("Cliente menor de edad no puede comprar") 
else:
    print("Sin licencia de conducir")
    

print("if con operadores logicos")
documentos_ok=True
pago_ok=True
if documentos_ok and pago_ok:
    print("Compra confirmada")

es_vip=False
tiene_referido=True
if es_vip or tiene_referido:
    print("Aplica descuento especial")
    
bloqueado=False
if not bloqueado:
    print("Cliente habilitado para compra")