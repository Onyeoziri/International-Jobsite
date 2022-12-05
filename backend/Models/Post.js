const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let postSchema = new Schema({
    keyword: {
        type: String
    }, 
    location:{
        type: String
    } , 
    page:{
        type: Number
    } ,
    position:{
        type: Number
    } ,
    company:{
        type: String
    } ,
    companyRating: {
        type: Number
    },
    companyReviewCount:{
        type: Number
    } ,
    highlyRatedEmployer: {
        type: Boolean
    },
    jobkey: {
        type: String
    },
    jobTitle:{
        type: String
    } ,
    jobLocationCity:{
        type: String
    } ,
    jobLocationPostal:{
        type: Number
    },
    jobLocationState:{
        type: String
    } ,
    maxSalary:{
        type: Number
    } ,
    minSalary:{
        type: Number
    } ,
    salaryType:{
        type: Number
    } , 
    pubDate:{
        type: Number
    } 
}, {
    collection: 'posts'
  })
module.exports = mongoose.model('Post', postSchema)


