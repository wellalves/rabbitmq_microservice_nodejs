require('dotenv').config();
const amqp = require('amqplib');

async function sendMessage(message) {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = process.env.QUEUE_NAME;

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message), { persistent: true });

  console.log(`[x] Sent '${message}'`);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

const msg = process.argv.slice(2).join(' ') || 'Hello RabbitMQ!';
sendMessage(msg);
