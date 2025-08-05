const express = require('express');
const dotenv = require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes'); 
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbconnection');

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes); 

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
