const router = require('express').Router();

router.get('/', (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('home');
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.redirect('/register');
    }
    catch (err) {
        console.log(err);
    }

});
module.exports = router;