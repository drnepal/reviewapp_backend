const User = require('../models/user')
// creating and saving is  asynchronous  task so use async await 
exports.create = async (req, res) => {
  const { name, email, password } = req.body

  const newUser = new User({ name, email, password })
  await newUser.save()

  res.json({ user: newUser })
};