const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package

const session = require('express-session');


const app = express();

//Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'fitformula_secret_key', // Use a strong secret in production
    resave: false,
    saveUninitialized: true
}));

//Sets a basic route index.hbs when website initially starts and when home is clicked from the nav bar or whenever a process needs to go back to home 
app.get('/', (req, res) => {
    res.render('index.hbs');
})

// Show login page
app.get('/login', (req, res) => {
    res.render('login.hbs');
});

// Process login form
app.post('/login', (req, res) => {
    const { username, email, password } = req.body;

    // Save user info in session
    req.session.user = {
        username,
        email,
        password
    };

    res.redirect('/profile');
});

// Show profile page
app.get('/profile', (req, res) => {
    const user = req.session.user;

    if (!user) {
        return res.redirect('/login');
    }

    res.render('profile.hbs', { user });
});


// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));