# Diagramas de secuencia

Todos los flujos recorren las mismas capas: **view → route (API) → controller → model → MySQL**.

## Registrar persona

Valida los datos y que el email no esté repetido.

![Secuencia: registrar persona](diagrams/08-secuencia-registrar-persona.svg)

## Crear usuario

Valida que la Person exista y guarda la contraseña con hash.

![Secuencia: crear usuario](diagrams/09-secuencia-crear-usuario.svg)

## Crear reserva

Valida que existan el User, el ReservationType y la City.

![Secuencia: crear reserva](diagrams/10-secuencia-crear-reserva.svg)

## Crear ciudad

Valida que exista el Estate.

![Secuencia: crear ciudad](diagrams/11-secuencia-crear-ciudad.svg)

## Códigos de respuesta usados

| Código | Cuándo |
|---|---|
| 201 Created | Registro creado |
| 400 Bad Request | Datos inválidos o incompletos |
| 404 Not Found | La llave foránea apunta a un registro que no existe |
| 409 Conflict | Valor único repetido (por ejemplo, el email) |
