const express = require('express')
// router
const router = express.Router()
// importing BlogPost model to access database
const BlogPost = require('../models/blogPost')

// POST - Creation
// localhost:3000/comments/:blogPostId <- A single blogPost can have many comments
router.post('/:blogPostId', (req, res) => {
    const blogPostId = req.params.blogPostId
    req.body.author = req.body.userId

    BlogPost.findById(blogPostId)
        // after we found a blogpost 
        // take that blogpost and add the comment
        .then(blogPost => {
            // single blogpost doc there is a field called comments
            blogPost.comments.push(req.body)

            // if we change a doc, we have to return and call .save() on the doc.
            return blogPost.save()
        })
        .then(blogPost => {
            res.redirect(`/blogPosts/${blogPost._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

// DELETE - delete comment
// localhost:3000/comments/delete/:blogPostId/:commId
router.delete('/delete/:blogPostId/:commId', (req, res) => {
    const blogPostId = req.params.blogPostId
    const commId = req.params.commId

    // find a fruit by it's ID
    BlogPost.findById(blogPostId) // single blogPost doc inside a blogpost doc will have many comments
    // find this comment by it's ID
        .then(blogPost => {
            const comment = blogPost.comments.id(commId)

            // remove comment
            comment.remove()

            // i've changed the comments field by 1
            return blogPost.save()
        })
        .then(blogPost => {
            res.redirect(`/blogPosts/${blogPostId}`)
        })
        .catch(err => {
            res.send(err)
        })
    
})

module.exports = router