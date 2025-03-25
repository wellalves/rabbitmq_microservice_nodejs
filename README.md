# rabbitmq_microservice_nodejs

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