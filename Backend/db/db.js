const mongoose = require('mongoose');

function connectToDb() {
    if (!process.env.DB_CONNECT) {
        console.error('ERROR: DB_CONNECT is not defined in .env file!');
        return;
    }

    console.log('Connecting to MongoDB Atlas...');
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(err => {
            console.error('MongoDB Connection Error:', err.message);
        });
}

module.exports = connectToDb;