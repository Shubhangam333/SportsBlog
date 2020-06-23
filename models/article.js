const mongoose = require('mongoose');

//Article Schema
const articleSchema = mongoose.Schema({
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  category: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  created_at: {
    type: Date,
    default:Date.now
  },
  comments:[{
      comment_subject:{
          type:String
      },
      comment_body:{
          type:String
      },
      comment_author:{
        type:String
      },
      comment_email:{
        type:String
     },
     comment_date:{
         type:String
     }
  }]
});

const Article= module.exports = mongoose.model('Article', articleSchema);

// Get Categories
module.exports.getArticles = function(callback, limit){
  Article.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//Get Article by Category
module.exports.getCategoryArticles = function(categoryId,callback){
  let query ={category:categoryId}
  Article.find(query,callback).sort([['title', 'ascending']]);
}

// Add Category
module.exports.addArticle = function(article, callback){
  Article.create(article, callback);
}

// Get Single Category By Id
module.exports.getArticleById = function(id, callback){
  Article.findById(id, callback);
}

// Update Category
module.exports.updateArticle = function(query, update, options, callback){
  Article.findOneAndUpdate(query, update, options, callback);
}

// Remove Category
module.exports.removeArticle = function(query, callback){
  Article.remove(query, callback);
}