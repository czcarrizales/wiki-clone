const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _articleId: {
        type: mongoose.Types.ObjectId,
        required: true,
        auto: true
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = {Article};