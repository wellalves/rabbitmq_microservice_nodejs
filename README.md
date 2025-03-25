# rabbitmq_microservice_nodejs - ptbr

microservice/
├── consumer/
│   └── index.js
├── producer/
│   └── index.js
├── package.json
└── .env

Microserviço simples em Node.js que utiliza o RabbitMQ como mecanismo de fila para processar tarefas assíncronas.

Um produtor (producer) que envia mensagens para a fila.

Um consumidor (consumer) que escuta e processa essas mensagens.

Uso da lib amqplib, a mais comum para RabbitMQ em Node.js.

Organização em microserviço, com producer e consumer separados.


# rabbitmq_microservice_nodejs - en

Simple Microservice in Node.js using RabbitMQ as a Queue Mechanism for Asynchronous Task Processing

A producer that sends messages to the queue.

A consumer that listens to and processes those messages.

Uses the amqplib library, the most common one for RabbitMQ in Node.js.

Organized as a microservice, with producer and consumer separated.