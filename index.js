const express = require('express');
const app = express();
const path = require('path');

const instagramRoutes = require('./routes/instagram');

const port = 8080;

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// mount routes
app.use('/ig', instagramRoutes);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
