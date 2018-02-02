const router = require('express').Router()
const superagent = require('superagent')


router.get('/data', (req, res, next) => {
  superagent.get('') // another API URL
    .then((data) => res.json(data.body))
    .catch((error) => next(error))
})


module.exports = router;
