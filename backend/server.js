const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
const port = 3000
const mongoUrl = 'mongodb://localhost:27017'
const dbName = 'nba'

let db

app.use(cors())

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName)
    console.log(`Connected to database: ${dbName}`)
  })
  .catch(error => console.error(error))

app.get('/teams', async (req, res) => {
  try {
    const teamsCollection = db.collection('Teams')
    const teams = await teamsCollection.find().toArray()
    res.status(200).json(teams)
  } catch (error) {
    res.status(500).json({ error: `An error occurred while fetching teams: ${error}` })
  }
})

app.get('/players', async (req, res) => {
  try {
    const playersCollection = db.collection('Players')
    const players = await playersCollection.find().toArray()
    res.status(200).json(players)
  } catch (error) {
    res.status(500).json({ error: `An error occurred while fetching players: ${error}` })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}.`)
})
