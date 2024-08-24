const express = require('express');
const mongoose = require('mongoose');
const Bet = require('./models/Bet');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/coinflip', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.post('/bet', async (req, res) => {
    const { user, amount, side } = req.body;
    const bet = new Bet({ user, amount, side });
    await bet.save();
    res.send(bet);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
