const express = require('express')
const {
    check,
    validationResult
} = require('express-validator');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const router = express.Router();

//@route   GET api/contacts
//@desc    Get all users Contact
//@access  Private
router.get('/', auth, async(req, res) => {
    try {
        const contacts = await Contact.find({
            user: req.user.id
        }).sort({
            date: -1
        });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route   POST api/contacts
//@desc    Get all users Contact
//@access  Private
router.post('/', (req, res) => {
    res.send('Add contact')
})


//@route   PUT api/contacts.:id
//@desc    Update Contact
//@access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})


//@route   DELETE api/contacts/:id
//@desc    Delete Contact
//@access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact')
})

module.exports = router;