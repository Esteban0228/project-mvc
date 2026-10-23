# Documentación - project-mvc

| Documento | Diagramas |
|---|---|
| [01-arquitectura.md](01-arquitectura.md) | Arquitectura de alto nivel |
| [02-modelo-relacional.md](02-modelo-relacional.md) | Modelo relacional (MR) |
| [03-diagrama-clases.md](03-diagrama-clases.md) | Clases del dominio, capas MVC, controladores y modelos |
| [04-casos-de-uso.md](04-casos-de-uso.md) | Casos de uso del Cliente y del Administrador |
| [05-diagramas-secuencia.md](05-diagramas-secuencia.md) | Registrar persona, crear usuario, crear reserva, crear ciudad |

## Diagramas

Las fuentes están en `diagrams/*.puml` (PlantUML) y cada una tiene su `.svg` generado al lado. `diagrams/_style.puml` define el estilo común.

Para regenerar los SVG después de editar un `.puml` (requiere Java y el [jar de PlantUML](https://github.com/plantuml/plantuml/releases)):

```bash
cd public/docs/diagrams
java -jar plantuml.jar -tsvg -charset UTF-8 [0-9]*.puml
```
