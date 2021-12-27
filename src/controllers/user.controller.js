const router = require('express').Router();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');

router.post('/registration', [
        body('first_name', 'enter valid first name').isLength({min: 3}),
        body('email', 'enter valid email').isEmail(),
        body('password', 'password must be 5 char long').isLength({min: 5}),
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            try {
                const user = await User.create(req.body);
                return res.status(201).send(user);
            } catch (error) {
                return res.status(500).send({ error: error.message, status: 'failed to create user'});
            }
        }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(201).json(users);
    } catch (error) {
        return res.status(500).send({ error: error.message, status: 'failed to fetch user'});
    }
});

router.get("/login", async (req, res) => {
    try {
        const user = await User.find({$and: [{email: {$eq: req.body.email}}, {password: {$eq: req.body.password}}]}).lean().exec();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).send({ error: error.message, status: 'failed to login'});
    }
});

module.exports = router;