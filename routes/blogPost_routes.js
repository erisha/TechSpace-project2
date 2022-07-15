const express = require('express')
// router
const router = express.Router()
// importing profile/blogpost model to access database
const User_Profile = require('../models/profile')
const BlogPost = require('../models/blogPost')

// POST - Create Blog Post
// localhost:3000/blogposts/:profileId <- A single profile can have many blogpost
router.post('/:profileId', (req, res) => {
    const profile = req.params.profileId
    req.body.author = req.body.userId

    User_Profile.findById(profile)
        // after we found a profile 
        // take that profile and add the blogpost
        .then(profile => {
            // single blogpost doc there is a field called comments
            profile.blogPost.push(req.body)

            // if we change a doc, we have to return and call .save() on the doc.
            return profile.save()
        })
        .then(profile => {
            res.redirect(`/profile/${profile._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

// DELETE - delete  Blog post
// localhost:3000/comments/delete/:profileId/:blogPostId
router.delete('/delete/:profileId/:blogPostId', (req, res) => {
    //** if profileId doesn't work. use userId
    const profileId = req.params.profileId
    const blogPostId = req.params.blogPostId

    // find a profile by it's ID
    User_Profile.findById(profileId) // a single profile  will have many blogpost
    // find this profile by it's ID
        .then(profile => {
            const blogPost = profile.blogPost.id(blogPostId)

            // remove blogpost
            blogPost.remove()

            // i've changed the comments field by 1
            return profile.save()
        })
        .then(profile => {
            res.redirect(`/profile/${profileId}`)
        })
        .catch(err => {
            res.send(err)
        })
    
})

module.exports = router