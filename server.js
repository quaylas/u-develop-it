const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/database.js');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


// ============ Default Response for Unsupported Requests ============ //
app.use((req,res) => {
    res.status(404).end();
});
// ============ LISTEN ============ //

// wait until DB is connected
db.on('open', () => {
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
    });
});