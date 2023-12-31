const User = require ("../models/user")
const jwt = require ("jsonwebtoken")
const bcrypt = require ("bcrypt")
const {authSchema} = require("../validations/auth")

exports.signup = (req,res,next) => {
    console.log(req.body)
    bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
        const {email,password} = req.body

        const user = new User({
            email: req.body.email,
            password : hash,
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            role : req.body.role        })
        user
        .save()
        .then((response) => {
            const newUser = response.toObject()
            delete newUser.password
            res.status(201).json({
                user : newUser, 
                message : "utilisateur crée"
            })
        })
        .catch ((error) => res.status(400).json({error : error.message}))
    }).catch ((error) => res.status(500).json({error : error.message}))


}

exports.login = (req,res,next) => {
    User.findOne({email: req.body.email})
    .then ((user) => {
        if (!user){
            return res 
            .status(401)
            .json({message : "Login ou mot de passe incorrécte"})
        }
        bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
            if (!valid) {
                return res
                .status(401)
                .json ({message : "Login ou mot de passe incorrecte "})
            }
            res.status(200).json({
                token : jwt.sign({userId: user._id, userRole: user.role},
                 "RANDOM_TOKEN_SECRET", 
                {expiresIn : "24h"})

            })

        })
    }).catch((error) => res.status(500).json({error : error.message}))

}

