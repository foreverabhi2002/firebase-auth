const firebase = require('../config')

exports.signup = (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "Email is required",
            password: "Password is required",
        })
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then((data) => {
            return res.status(201).json({
                message: "User created successfully",
                data: data,
            })
        })
        .catch(function (error) {   
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                return res.status(500).json({ error: errorMessage })
            } else {
                return res.status(500).json({ error: errorMessage })
            }
        })
}

exports.signin = (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "Email is required",
            password: "Password is required",
        })
        .status(404).json({
            message: "User not found",
        })
    }
    firebase
        .auth()
        .signInWithEmailAndPassword(req.body.email, req.body.password)
        .then((user) => {
            return res.status(200).json(user)
        })
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                return res.status(500).json({ error: errorMessage })
            } else {
                return res.status(500).json({ error: errorMessage })
            }
        })
}

exports.forgetPassword = (req, res) => {
    if(!req.body.email) {
        return res.status(422).json({
            email: "Email is required",
        })
    }
    firebase
        .auth()
        .sendPasswordResetEmail(req.body.email)
        .then(() => {
            return res.status(200).json({
                message: "Password reset email sent successfully",
            })
        })
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/invalid-email') {
                return res.status(500).json({ error: errorMessage })
            } else if (errorCode === 'auth/user-not-found') {
                return res.status(500).json({ error: errorMessage })
            } else {
                return res.status(500).json({ error: errorMessage })
            }
        })
}