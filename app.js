const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://my-mongo:27017/Samandb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB 🚀'))
.catch((err) => console.error('MongoDB connection error:', err));

// Simple Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Hello,  Your app is running with MongoDB 🚀');
});

app.post('/add-user', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send('User added successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});