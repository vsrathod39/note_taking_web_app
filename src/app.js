const express = require('express');
const connect = require('./config/db');
const path = require('path');

const app = express();
app.use(express.json());
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));
// app.set('view engine', 'hbs');

const userController = require('./controllers/user.controller');
const noteController = require('./controllers/note.controller');

app.get("/", (req, res) => {
    return res.send("hi");
    // try {
    //     return res.render('index');
    // } catch (error) {
    //     return res.status(500).json({error: error.message, status: "failed to load..."});
    // }
})

app.use("", userController);
app.use("", noteController);

app.listen(2345, async (req, res) => {
    await connect();
    console.log("listening at port 2345...");
});