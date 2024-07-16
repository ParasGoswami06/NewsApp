const express = require('express')
const axios=require("axios")
const path = require('path')
const app = express()
const port = 3000

app.get('/newsio?', (req, res) => {
  res.sendFile('home.html',{ root: path.join(__dirname) })
})
app.get('/', (req, res) => {
  res.sendFile('homepage.html',{ root: path.join(__dirname) })
})

app.get('/api', async (req, res) => {
  // console.log(req._parsedUrl.query);  // after ? all the data will be recieved 
  let url="https://newsapi.org/v2/everything?"+req._parsedUrl.query
  r=await axios(url)
  a=r.data
  res.json(a)
})

app.listen(port, () => {
  console.log(`News app running on port ${port}`)
})
