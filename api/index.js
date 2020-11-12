const express = require('express')
const app = express()

app
  // hello world
  .get('/greeting', (req, res) => {
    res.json(`Hello ${req.params.what || 'world'}`)
  })

module.exports = {
  path: '/api',
  handler: app
}
