const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const { Article } = require('./db/models');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use(cors());

app.get('/articles', (req, res) => {
    Article.find({}).then((articles) => {
        res.send(articles);
    })
});

app.get('/articles/:_id', (req, res) => {
    Article.find({ _id: req.params?._id || '' }).then((articles) => {
        res.send(articles);
    })
});

app.post('/articles', (req, res) => {
    let newArticle = new Article({
        title: req.body.title,
        description: req.body.description,
        _articleId: req.params.articleId
    });
    newArticle.save().then((articleDoc) => {
        res.send(articleDoc);
    });
});

app.patch('/articles/:articleId', (req, res) => {
    Article.findOneAndUpdate({
        _id: req.params.articleId
    }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
});

app.delete('/articles/:articleId', (req, res) => {
    Article.findOneAndRemove({
        _id: req.params.articleId
    }).then((removedArticleDoc) => {
        res.send(removedArticleDoc)
    })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})