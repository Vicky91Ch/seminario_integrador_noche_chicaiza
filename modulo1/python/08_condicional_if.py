print("Condicional if")


print("if Simple")
stock=3
if stock>0:
    print("Producto disponible")


print("if else - dos caminos")
saldo=25
if saldo>=50:
    print("Compra permitida")
else:
    print("Saldo insuficiente")


print("if multiples condiciones")
temperatura=32
if temperatura<10:
    print("Hace frío")
elif temperatura<25:
    print("Clima templado")
else:
    print("Hace calor")


print("if condiciones anidadas")    
conexion=True
token_valido=False
if conexion:
    if token_valido:
        print("Acceso a la api")
    else:
        print("Token inválido") 
else:
    print("Sin conexión")
    

print("if con operadores logicos")
documento=True
pago=True
if documento and pago:
    print("Inscripcion confirmada")

es_vip=False
tiene_invitacion=True
if es_vip or tiene_invitacion:
    print("Puede entrar al evento")
    
bloqueado=False
if not bloqueado:
    print("Usuario habiltado")