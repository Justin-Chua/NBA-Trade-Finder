// initialize the 'nba' database with the required collections
db = db.getSiblingDB('nba');

// Initialize the database with the required collections and add dummy data for now.
// TODO: Fix document structures of collections to match what we put in the google doc
// TODO: Populate the collections with the data from the CSV files generated from the data scraper
db.Teams.insertMany([
  { id: 1, name: "Los Angeles Lakers", roster: [], cap: {} },
]);

db.Players.insertMany([
  { id: 1, details: { name: "LeBron James", position: "SF", number: 23 } , teamId: 1, contract: {} },
]);
