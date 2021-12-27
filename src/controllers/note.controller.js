const express = require('express');
const Note = require('../models/note.controller');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/note', [
    body('heading', 'heading can not be blank').isLength({min: 1}),
    body('content', 'heading can not be blank').isLength({min: 1})
], async (req, res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            // req.body.user_id = JSON.parse(localStorage.getItem('user'));
            try {
                const note = await Note.create(req.body);
                return res.status(201).json(note);
            } catch (error) {
                return res.status(500).send({ error: error.message, status: 'failed to create note'});
            }
        }
});

router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find({user_id: {$eq: req.body.user_id}}).lean().exec();
        return res.status(201).json(notes);
    } catch (error) {
        return res.status(500).send({ error: error.message, status: 'failed to create note'});
    }
});

module.exports = router;