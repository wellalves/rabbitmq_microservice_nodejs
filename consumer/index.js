require('dotenv').config();
const amqp = require('amqplib');

async function consumeMessages() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = process.env.QUEUE_NAME;
  await channel.assertQueue(queue, { durable: true });

  channel.prefetch(1);

  console.log('[*] Waiting for messages. To exit press CTRL+C');

  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const content = msg.content.toString();
      console.log(`[x] Received: ${content}`);

      await new Promise((res) => setTimeout(res, 2000));

      console.log(`[✓] Done processing: ${content}`);
      channel.ack(msg);
    }
  });
}

consumeMessages();
