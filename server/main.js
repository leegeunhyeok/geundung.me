const config = require('config')
const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

const dist = path.join(__dirname, '../', 'dist')

app.use('/css', express.static(path.join(dist, 'css')))
app.use('/fonts', express.static(path.join(dist, 'fonts')))
app.use('/img', express.static(path.join(dist, 'img')))
app.use('/assets', express.static(path.join(__dirname, '../', 'src', 'assets')))
app.use('/js', express.static(path.join(dist, 'js')))

app.get('/', (req, res) => {
  fs.readFile(path.join(dist, 'index.html'), (err, data) => {
    if (err) {
      console.log(err)
      res.writeHead(500, { 'Content-Type': 'text/html' })
      res.write(err)
      res.end()
      return
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
  })
})

app.listen(config.get('port'), () => {
  console.log('Server started')
})