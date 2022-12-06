const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let jerbSchema = new Schema({
  
    keyword:{
        type: String
    },
    location:{
        type: String
    },
    page:{
        type: Number
    },
    position:{
        type: Number
    },
    company:{
        type: String
    },
    companyRating:{
        type: Number
    },
    companyReviewCount:{
        type: Number
    },
    highlyRatedEmployer:{
        type: Boolean
    },
    jobkey:{
        type: Number
    },
    jobTitle:{
        type: String
    },
    jobLocationCity:{
        type: String
    },
    jobLocationPostal:{
        type: Number
    },
    jobLocationState:{
        type: String
    },
    maxSalary:{
        type: Number
    },
    minSalary:{
        type: Number
    },
    salaryType:{
        type: Number
    },
    pubDate:{
        type: Number   
    }
}, {
    collection: 'jerb'
  })
module.exports = mongoose.model('Jerb', jerbSchema)