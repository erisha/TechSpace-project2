# TechSpace-project2

- Networking app for professionals
- Social Media where tech professionals network, show off their portfolios, share job posts, & search for upcoming opportunities
- I also want this app to be like a new age myspace. With music player & pages 



User stories: (`As a user….`)

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
npm express liquid dot env
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