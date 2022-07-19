const express = require('express')
// router
const router = express.Router()
// importing profile/blogpost model to access database
const Profile = require('../models/profile')




//GET route for displaying new Profile form 
router.get('/new', (req,res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('myprofile/new', { username, loggedIn })
})
// POST - Create Profile
router.post('/', (req,res) => {
    req.body.owner = req.sessionStore.userId

    console.log(req.body)
    Profile.create(req.body)
            .then(profile => {
                console.log(profile)
                res.redirect('/myprofile')
            })
            .catch(err => {
                res.json(err)
            })
})

/// GET - Show user's profile
// localhost:3000/profile/:id <- view user's page

router.get('/myprofile', (req, res) => {
    
     const profileId = req.params.id

    Profile.findById(profileId)
        .populate('blogPost.author')
        .then(profile => {
            const userId = req.session.userId
            const username = req.session.username
            res.render('profile/show', { profile, userId, username })
        } ) 
        .catch(err => {
            res.json(err)
        })


    })

    router.get('/', (req,res) => {
        Profile.find({})
            .then(myprofile => {
                res.render('myprofile', { myprofile })
            })
            .catch(err => {
                res.json(err)
            })

    })

    router.get('/myprofile', (req, res) => {
        Profile.find({ owner: req.session.userId })
                .then(profile => {
                    res.render('myprofile', { profile})
                })
    })


// DELETE - delete  Delete Profile
// localhost:3000/profile/:id
router.delete('/:id', (req, res) => {
    //** if profileId doesn't work. use userId
    const profileId = req.params.id
    
    // find a profile by it's ID
    // ***change to userId back to profileId
    Profile.findByIdAndRemove(profileId) 
    // a single user has one profile
    // find this profile by it's ID
        .then(profile => {
            res.redirect('/users/signup')        
        })
        .catch(err => {
            res.json(err)
        })

})



//GET route for displaying update profile form
router.get('/:id/edit' , (req, res) => {
    const profileId = req.params.id
    
    Profile.findById(profileId)
    .then(profile => {
        res.render('profile/edit', { profile })
    })
    .catch(err => {
        res.json(err)
    })


})

//PUT - Update Profile
// localhost:3000/profile/:id
router.put('/:id', (req, res) => {
    const profileId = req.params.id

    req.body.updateProfile = req.body.updateProfile === 'on' ? true : false

    Profile.findByIdAndUpdate(profileId, req.body, { new: true })
        .then(profile => {
            res.redirect(`/myprofile/${profile._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})




module.exports = router