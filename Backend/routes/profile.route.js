let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Profile Model
let profSchema = require('../Models/Prof');
// CREATE Profile
router.route('/create-profile').post((req, res, next) => {
  profSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Profiles
router.route('/').get((req, res) => {
  profSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Profile
router.route('/edit-profile/:id').get((req, res) => {
  profSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Profile
router.route('/update-profile/:id').put((req, res, next) => {
  profSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('profile updated successfully !')
    }
  })
})
// Delete Profile
router.route('/delete-profile/:id').delete((req, res, next) => {
  profSchema.findByIdAndRemove(req.params.id, (error, data) => {
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