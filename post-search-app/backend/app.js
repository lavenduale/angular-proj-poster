const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api/posts', (req, res, next) => {
    // res.send('Hello from express!');
    const posts = [
        {
            id: 'fadf12421l',
            title: 'First server-side post',
            content: 'This is coming from the server'
        },
        {
            id: '123oooooo',
            title: 'Second server-side post',
            content: 'This is coming from the server lol'
        }
    ];
    res.status(200).json({
        message: "posts are successful to be fetched.",
        posts: posts
    });
});

module.exports = app;