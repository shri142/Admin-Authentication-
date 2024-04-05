const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');


const app = express();
  const PORT = 3000;

// Credentials for the admin
const adminDetails = {
    username: 'shrikrishna',
    password: 'shri123456'
};

// BodyParser Middleware ,It will pass the incoming json requests
app.use(bodyParser.json());

// CORS middleware to allow requests from any origin
app.use(cors());


//It is  Route for the login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password match admin credentials,that is admin authentication
    if (username === adminDetails.username && password === adminDetails.password) {
        res.status(200).json({ message: 'Login successful for admin.' });
    } else {
        res.status(401).json({ message: 'Not an admin. Access denied.' });
    }
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
