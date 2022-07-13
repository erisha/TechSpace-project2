# TechSpace-project2

- Networking app for professionals
- Social Media where tech professionals network, show off their portfolios, share job posts, & search for upcoming opportunities
- I also want this app to be like a new age myspace. With music player & pages 



## User stories: (`As a user….`)

- Sign up & create an account
    -fill out form
        - name
        - email
        - birthday
        - create username
        - create password
    -click create account ---> login page
        - user logs in using username/password

- Login existing account
    - type in username
    - type in password
    - click login --> homepage

- Create a profile
    - About me 
    - Add a profile picture
    - Add your connects & socials
    - Add your resume (resume is the profile page?)
    - Add your skills
    - Share your work/projects

- Update/ Add to profile
    -click edit profile
    -user can update existing info
    - also add new info
    - create new category (future version)

- Create a post
    -click new post
    - write post
    - click post
    - post added to feed


- Edit/Update a post
    - user is able to edit their own post
    - click edit under post



- Comment on Post
    -click comment under post
    - write comment
    -post comment
    - comment added under current post


- Delete post
    -user is able to delete their own post
    - click delete under post
    - post is deleted
    - alert confirming deleted post


- Like a post
    -click like under post to react 

- Like a comment
    -click like under comment to like comment

- Add a new connection
    - click + to add user as new connection

- View Profile
    - click on user's name/pic and be taken to profile

- View Projects 
    -click on project and be taken to link 

- Contact
    - users will be able to click on contact info on profile and taken to that website/link


- Music Player ( possible version 2)
    - Create a playlist
    - Music plays when user clicks on profile
    - Skip to next song
    - Use a music API to achieve this.
    - 
- Message 
    - Receive messages
    - Send messages from other users or viewers of page



Schema: (models)

-Profile 
	- name - string
	- About Me - string
	- profile image - img?
	- Resume - string (link to resume)
	- Skills Section - string

- Login
    - Username - string
    - Password - string


- Sign Up
    - Name - string
    - Email - string
    - Birthday - string
    - Username - string
    - Password - string
	

- Post
    - Body - string
    - Author - string
    - Timestamp
    - Likes - number - default value of 0
    - 

- Comment
    - Author  - string
    - Body - string
    - Timestamp
    - Likes - number - default value of 0 


- Message
    - Author  - string
    - Body - string
    - Timestamp



Using 
npm express,liquid, liquid-express views, dot env, mongoose, mongodb
API - upwork job board


TechSpace-project 2
    -models
        -profile
        -user
        -comment
        -message

    -views
        - profile
            -edit
            -main

        -homepage
            -post
            -comments
        
        -messages
        
        -user
            - sign up
            - login
        -layout

    -Server.js
    - public
        -style.css



## Wireframes

![StartPage](https://i.imgur.com/98AovRB.png)

![SignUP](https://i.imgur.com/O2CuFlC.png)

![Login](https://i.imgur.com/tAzLC8y.png)

![Homepage](https://i.imgur.com/hEAU8hX.png)

![User profile](https://i.imgur.com/pCOWAo2.png)

![Connection/other user profile](https://i.imgur.com/V7GulgI.png)

![Add Comment](https://i.imgur.com/ikyYyZA.png)

![Messages](https://i.imgur.com/okUQW4i.png)



## EDR
![EDR](https://i.imgur.com/iHcq4W6.png)


## Route Table

| URL | Verb | Description|
|-----|------|------------|
| /user/signup |post | register a user |
| /user/login | post | user signin - new session |
| /user/ signout | delete | user signout |
| /user/update-profile| put |form to update info name, email, pw, etc|
| /new-post| post | create a new post|
| /post/:id | delete | delete a single post |
| /post/:id | patch | edit a single post |
| /post/:id | get | view single post |
| /comment | post | create new comment |
| /comment/:id | delete| delete a single comment |
| /comment/:id | patch | edit a single comment |
| /message | post | create a new message |
| /message/reply/:id | post | reply to a message |
| /project | get | view all user projects |
| /project/:id | get | view a user projects |
| /project | post | add project to collection|
| /project/:id | delete | delete a project



