const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// connect DB
mongoose.connect('mongodb://localhost:27017/Jumla');

// import routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admins');

// use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

// start server
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
