const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

const dbURI = "mongodb+srv://anyakorytko:12345@cluster0.jpqjs.mongodb.net/energy?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
    app.listen(PORT, () => {});
});

app.use(cors());

app.use(express.json());

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Соединение установлено');
        return;
    }
    next();
});

const usersRouter = require('./server');
app.use('/energy', usersRouter);