const express = require('express');
const app = express();
const tasks = require('./routes/taskRoutes');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');

// middleware
app.use(express.static('./public'))
app.use(express.json());
app.use(notFound);


// routes
app.use('/api/v1/tasks', tasks);






port = 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
}

start();

