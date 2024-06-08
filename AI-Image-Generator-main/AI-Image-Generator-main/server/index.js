import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connect.js'; // Import your MySQL connection module

dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize Express application
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '50mb' })); // Enable JSON parsing middleware

// Define a simple route
app.get('/', async (req, res) => {
    res.send('Hello from AI Image Generator');
});

// Function to start the server
const startServer = async () => {
    try {
        await connectDB(); // Connect to MySQL
        const port = process.env.PORT || 8080; // Use the specified port from environment or default to 8080
        app.listen(port, () => console.log(`Server has started on port http://localhost:${port}`));
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

// Call the startServer function to start the server
startServer();
