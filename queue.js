const { Queue } = require('bullmq')
require('dotenv').config()

const QUEUE_NAME = process.env.QUEUE_NAME;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

// Create a new connection in every instance
const queue = new Queue(QUEUE_NAME, {
    connection: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        password: REDIS_PASSWORD
    }
});
let i = 0
setInterval(() => {
    i = i + 1
    console.log(`Job ${i}`);
    queue.add('job', { i });
}, 3000)
