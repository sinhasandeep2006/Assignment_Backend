const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
    user: String,
    amount: Number,
    side: String,
    result: String,
});

module.exports = mongoose.model('Bet', betSchema);
