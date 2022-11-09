# Sprint 3. Patterns

## Entrega 3.1 - Patterns 1


### Nivel 1 - Callback Hell

Ver respuesta en el archivo: [read_and_reverse.js](./entrega1_nivel1/read_and_reverse.js)


### Nivel 2 - Singleton

Ver respuesta en el archivo: [App.js](./entrega1_nivel2/App.js)

Ver app funcionando
```
$ node App
```

Clases utilizadas
- [Joc.js](./entrega1_nivel2/Joc.js)
- [Jugador.js](./entrega1_nivel2/Jugador.js)
- [Marcador.js](./entrega1_nivel2/Marcador.js)

### Nivel 3 - Observer

Dos clases creadas
- [temas.js](./entrega1_nivel3/temas.js)
- [user.js](./entrega1_nivel3/user.js)

Ejecutar:
```
$ node App
```

## Entrega 3.2 - Patterns 2

### Nivel 1 - Middleware

- [Middlewares](./entrega2_nivel1/Middlewares.js)
- [App](./entrega2_nivel1/app.js)

Ejecutar:
```
$ node App
```

### Nivel 2 - Decorator

- [Articulo ES](./entrega2_nivel2/ArticuloES.js)
- [app](./entrega2_nivel2/app.js)

Ejecutar:
```
$ node app
```

### Nivel 3 - Publisher - Subscriber

Requisitos:
- Tener instalado el RabbitMQ - [Opciones de inslación](https://www.rabbitmq.com/download.html)
  - Se puede levantar una máquina docker con el siguiente comando:
    > ```docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.11-management```
- Instalar dependencias del proyecto
    > ```npm install```
- Levantar uno o más Subscriber.
  > ```node receiver```
- Enviar mensajes 
  > ```node sender '[MSG]'```


## Referencias utilizadas

1. Callback Hell
    1. [YOUTUBE - ASINCRONISMO en JS 🤒 Qué es el CALLBACK HELL?](https://www.youtube.com/watch?v=iAq9SOEODvo)
    1. [YOUTUBE - PROMESAS y ASYNC - AWAIT 😎 THEN ? ✅ CATCH?](https://www.youtube.com/watch?v=ksg6SDwllDs)
1. Singleton
    1. [YOUTUBE - Singleton en JavaScript](https://www.youtube.com/watch?v=rrWRhrdwuLg)
1. Observer
    1. [Node Observer Pattern](https://dev.to/alemagio/node-observer-pattern-27oj)
    1. [The observer pattern](https://subscription.packtpub.com/book/web-development/9781783287314/1/ch01lvl1sec12/the-observer-pattern)
    1. [Node documentation Event](https://nodejs.org/docs/latest/api/events.html)
1. Middleware
    1. [Github StratocasterO](https://github.com/StratocasterO/Node-IT-Academy/tree/main/sprint%203/Patterns%202/middleware_pattern)
    1. [YOUTUBE - Middleware Node js Design Patterns - PT](https://www.youtube.com/watch?v=lI2MiMEn9HQ)
 1. Publisher - Subscriber
    1. [RabbitMQ](https://www.rabbitmq.com/)
    2. [RabbitMQ Tutorial](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
