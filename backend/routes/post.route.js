let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let postSchema = require('../Models/Jerb');
// CREATE Student
router.route('/create-post').post((req, res, next) => {
  postSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Students
router.route('/').get((req, res) => {
  postSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Student
router.route('/edit-post/:id').get((req, res) => {
  postSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-post/:id').put((req, res, next) => {
  postSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Post updated successfully !')
    }
  })
})
// Delete Student
router.route('/delete-post/:id').delete((req, res, next) => {
  postSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;