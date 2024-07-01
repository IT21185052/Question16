const router = require('express').Router();
let User = require('../models/user.model');

// Create
router.route('/add').post((req, res) => {
  const { first_name, last_name, email } = req.body;
  const newUser = new User({ first_name, last_name, email });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Read
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.email = req.body.email;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
