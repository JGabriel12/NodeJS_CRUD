const router = require('express').Router()
const User = require('./src/models/User')

// User - Create
router.post('/create', async (req, res) => {
  const { full_name, email, password } = req.body

  // if (!full_name) res.status(422).json({ Error: 'Name value cannot be null!' })

  const user = {
    full_name,
    email,
    password
  }

  try {
    await User.create(user)
    res.status(201).json({ Message: 'Create success!' })
  } catch (e) {
    res.status(500).json({ Error: e })
  }
})

// User - Read
router.get('/list', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (e) {
    res.status(500).json({ Error: e })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findOne({ _id: id })

    if (!user) {
      res.status(422).json({ Message: 'User not found!' })
      return
    }

    res.status(200).json(user)
  } catch (e) {
    res.status(500).json({ Error: e })
  }
})

// User - Update
router.patch('/:id', async (req, res) => {
  const id = req.params.id

  const { full_name, email, password } = req.body
  const user = {
    full_name,
    email,
    password
  }

  try {
    const updateUser = await User.updateOne({ _id: id }, user)
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json({ Error: e })
  }
})
// User - Delete

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    await User.deleteOne({ _id: id })
    res.status(200).json({ Message: 'Deleted user success!' })
  } catch (e) {
    res.status(500).json({ Error: e })
  }
})
// Index
router.get('/', (req, res) => {
  res.json({ message: 'Test my app!' })
})
module.exports = router
