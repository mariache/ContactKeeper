const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        const {
            name,
            email,
            password
        } = req.body;

        try {
            let user = await User.findOne({
                email
            });

            if (user) {
                return res.status(400).json({
                    msg: 'User already exists'
                })
            }

            user = new User({
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            res.send('User saved');

        } catch (e) {
            console.log(e.message);
            res.status(500).send('Server Error');
        }
    }
);


module.exports = router;