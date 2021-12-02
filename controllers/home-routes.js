const sequelize = require('../config/connection');
const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    BlogPost.findAll({
        attributes: [
            'id',
            'title',
            'entry',
            'date_published'
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'comments', 'blogpost_id', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },

        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbBlogPostData => {
            const blogposts = dbBlogPostData.map(blogpost => blogpost.get({ plain: true }));
            res.render('homepage', { blogposts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// router.post('/login', (req, res) => {
//     console.log(req.body);
//     res.redirect('/login');
// });

// router.get('/register', (req, res) => {
//     res.render('register');
// });

// router.post('/register', async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         console.log(user);
//         res.redirect('/register');
//     }
//     catch (err) {
//         console.log(err);
//     }

// });



module.exports = router;