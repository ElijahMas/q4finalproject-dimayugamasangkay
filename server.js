const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Required for JSON body in /save-info

// Express-session middleware
app.use(session({
    secret: 'fitformula_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'pages'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { user: req.session.user }); // So username can be passed if logged in
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, email, password } = req.body;

    // Save user info in session
    req.session.user = { username, email, password };

    res.redirect('/profile');
});

app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    res.render('profile', {
        user: req.session.user,
        userInfo: req.session.userInfo || null
    });
});

app.post('/update', (req, res) => {
    const { username, email, password } = req.body;

    // Update session data
    req.session.user = {
        username,
        email,
        password
    };

    res.redirect('/profile');
});

// Handle saving user health info from index page
app.post('/save-info', (req, res) => {
  const { height, weight, age, healthIssues, bmi, plan, classification } = req.body;

  req.session.userInfo = {
    height,
    weight,
    age,
    healthIssues,
    bmi,
    classification,
    plan
  };

  res.json({ success: true });
});

app.post('/delete-account', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error deleting account');
    }
    res.redirect('/login');
  });
});

app.post('/save-plan', (req, res) => {
  const { plan } = req.body;

  if (!req.session.userInfo) {
    req.session.userInfo = {};
  }

  req.session.userInfo.exercisePlan = plan;

  res.json({ success: true });
});

// Start server
const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
