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
router.post(
    '/', [
        auth, [
            check('name', 'Name is required')
            .not()
            .isEmpty(),
            check('type', 'Type must be personal or professional').isIn([
                'personal',
                'professional'
            ])
        ]
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name,
            email,
            phone,
            type
        } = req.body;

        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id
            });

            const contact = await newContact.save();

            res.json(contact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


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