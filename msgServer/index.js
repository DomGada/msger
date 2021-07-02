const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Connecting to the Database
const db = require('./config/database');

// User routes
app.use('/users', require('./routes/users'))

// Chatlogs routes
app.use('/chatlogs', require('./routes/chatlogs'))

// Testing DB Connection
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err))

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from server!"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//5433 for postgres port