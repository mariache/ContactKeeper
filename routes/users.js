const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');

const User = require('../models/User')

//@route   POST api/users
//@desc    Register User
//@access  Public
router.post('/', [
        check('name', 'Name is required')
        .not()
        .isEmpty(),
        check('email', 'Please include a valid email')
        .not()
        .isEmpty(),
        check('password', 'Please enter a password with 6 or more characters').isLength({
            min: 6
        })
        .not()
        .isEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        res.send('passed');
    }
);


module.exports = router;