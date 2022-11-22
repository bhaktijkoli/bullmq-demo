const { Worker } = require('bullmq')
require('dotenv').config()

const QUEUE_NAME = process.env.QUEUE_NAME;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

// Create a new worker
const worker = new Worker(QUEUE_NAME,
    async (job) => {
        console.log(job.data);
    },
    {
        connection: {
            host: REDIS_HOST,
            port: REDIS_PORT,
            password: REDIS_PASSWORD
        }
    }
);