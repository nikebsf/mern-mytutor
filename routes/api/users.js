const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

// user model
const User = require("../../models/User");

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Public
 */
 router.get('/',(req, res) => {
    
    try {
      const users = User.find();
      if(!users)
       throw Error('No users exist');
      
      else
      User.find()
      .then(users => res.json(users));
      
      
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

// @route   POST api/users
// @desc    register new user
// @access  Public
// router.post("/", (req, res) => {
// 	const { name, email, password } = req.body;

//     if(!name || !email || !password) {
//         return res.status(400).json({msg: 'Please enter all fields!'})
//     }

//     User.findOne({ email })
//     .then(user => {
//         if(user) return es.status(400).json({msg: 'User already exists!'})

//         const newUser = new User({
//             name,
//             email,
//             password
//         });

//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//                 if(err) throw err;
//                 newUser.password = hash;
//                 newUser.save()
//                 .then(user => {
//                     res.json({
//                         user: {
//                             id: user.id,
//                             name: user.name,
//                             email: user.email
//                         }
//                     })
//                 })
//             })
//         })
//     })
// });


router.post('/',(req,res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
    .then(user => res.json(user));
})

module.exports = router;
