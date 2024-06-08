import mysql from 'mysql';
import dotenv from 'dotenv';

// Load environment variables from .env file
const result = dotenv.config();

if (result.error) {
    console.error('Error loading .env file:', result.error);
}

const connectDB = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });

    return connection;
};

export default connectDB;
