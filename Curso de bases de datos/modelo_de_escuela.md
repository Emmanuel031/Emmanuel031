# Escuela

## Listado de entidades


### estudiantes

- id_estudiante **(PK)**
- nombre
- edad
- aula **(FK)**
- asiento


### profesores

- id_profesor **(PK)**
- nombre
- edad
- asignatura **(FK)**
- aula_encargada **(FK)**


### aulas

- id_aula **(PK)**
- nombre
- cantidad_actual_de_alumnos
- cantidad_máxima_de_alumnos



### Asignaturas

- ID_asignatura **(PK)**
- nombre