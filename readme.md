# PROBLEMA TECNICO
Pregunta Técnica:

Una plataforma de Red Social, permite las siguientes operaciones a sus usuarios: post, follows, re-post
La plataforma provee a los desarrolladores de aplicaciones, el siguiente API:
> GET /<username>/followers

 
```
{ “user”: “username”,  “Followers”: [“user1”, “user2”,….. “user n”] }
```
 

>GET /<username>/following

 ```
{ “user”: “username”,  “Following”: [“user1”, “user2”,….. “user n”] }
```

 Implemente un algoritmo en cualquier lenguaje de programación, que calcule la distancia entre 2 usuarios.

Ejemplo:

 

Dado:
```
{ “user”: “userA”,  “Following”: [“userB”, “userD”,“userE”, "userG"] }

{ “user”: “userB”,  “Following”: [“userC”, “userJ”,“userI”, "userE"] }

{ “user”: “userC”,  “Following”: [“userM”, “userN”,“userJ”, "userI", "userE"] }
```
     

SI requiero a distancia entre "userA" y "userM"

Al buscar se encuentra que: User A, sigue a User B. Y User B, sigue a User C. Y User C, sigue User M

Entonces, la distancia entre User A y User M, es: 3
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


# Hecho en Javascript

  - Usar funcion dijkstra para dar respuesta al algoritmo
  - Crear Nodos con makenodes

## Ejemplo
 ```
  makeNodes("USERA", "USERB", a, "USERC", b);
```
## Para correr en windows 
```
  node nombrearchivo.js
```
