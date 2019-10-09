const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateRegisterInput = require("../validation/register.validation");
const validateLoginInput = require("../validation/login.validation");

const User = require("../models/user.model");

router.route('/register').post((req,res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                res.status(400).json({email: "Email already in use"})
            }
            else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                // Salt and hash password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) =>{
                        if(err) {
                            throw err;
                        }
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.route('/login').post((req, res) => {
    
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if(!user) {
            return res.status(400).json("Email not found");
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };

                jwt.sign(payload, 
                    process.env.PRIVATE_KEY, {
                    expiresIn: 31556926,
                    algorithm:  "RS256"
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                  );
            }
            else {
                return res.status(400).json({passwordincorrect: "Password incorrect"});
            }
        });
    });

});

module.exports = router;