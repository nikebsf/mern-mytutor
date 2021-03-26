const express = require("express")
const router = express.Router()

const bcrypt = require("bcryptjs")

// Prof model 
const Prof = require("../../models/Prof")

/**
 * @route   GET api/profs
 * @desc    Get all profs
 * @access  Public
 */

router.get('/',(req,res) => {
    try {
        const profs = Prof.find()
        if(!profs)
            throw Error('No professor found')

        else
        Prof.find()
        .then(profs => res.json(profs))
    }
    catch(e){
        res.status(400).json({ msg: e.message})
    }
})


router.post('/',(req,res) => {
    const newProf = new Prof({
        fname: req.body.fname,
        lname: req.body.lname,
        institution: req.body.institution
    })

    newProf.save()
    .then(prof => res.json(prof))
})

module.exports = router