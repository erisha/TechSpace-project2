const express = require('express')
// router
const router = express.Router()
// importing profile/blogpost model to access database
const User_Profile = require('../models/profile')
const User = require('../models/user')

// POST - Create Profile - done in users/newprofile


/// GET - go to user's profile
// localhost:3000/user/:profileId <- view user's page

router.get('user/:profileId', (req, res) => {
    res.render('user/:profileId')
})


//////PUT- update profile

// router.put('user/:profile', (req,res) => {
//     res.router
// })


// DELETE - delete  Delete Profile
// localhost:3000/comments/delete/:profileId/
router.delete('/delete/:profileId', (req, res) => {
    //** if profileId doesn't work. use userId
    const profileId = req.params.profileId
    
    // find a profile by it's ID
    // ***change to userId back to profileId
    User_Profile.findById(userId) // a single user has one profile
    // find this profile by it's ID
        .then(profile => {
            const blogPost = profile.blogPost.id(blogPostId)

            // remove profile
            profile.remove()

            // i've changed the comments field by 1
            return profile.save()
        })
        .then(profile => {
            //res.redirect(`/profile/${profileId}`)
            res.redirect(`/techSpace`)
        })
        .catch(err => {
            res.send(err)
        })
    
})

module.exports = router