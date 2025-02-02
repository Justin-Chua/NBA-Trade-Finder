# NBA-Trade-Finder
A web application used to simulate trade scenarios in the NBA. Inspired by the Trade Finder in the MyLeague gamemode in NBA 2K.

![Trade Finder V1](https://github.com/user-attachments/assets/9718e7c2-449f-47a6-8e63-7e2913490f02)

# Running the Database Locally
1. Spin up a docker container to host application data in MongoDB: `docker-compose up -d`

    This will start a local MongoDB instance in a Docker container, accessible on `localhost:27017` of your local machine.
    The `nba` database with the `Teams` and `Players` collections will be created automatically.


2. Access MongoDB using the MongoDB shell:

    Enter docker container: `docker exec -it mongodb-nba-container /bin/bash`

    Enter MongoDB: `mongosh`
    
    Switch to the `nba` database: `use nba`

    Show collections: `show collections`

    Alternatively, you can use a GUI client like `MongoDB Compass` to connect via `localhost:27017`.


3. Stop the Docker container when you're done: `docker-compose stop`

# Running the Application Locally

1. To run the backend server, navigate to the `backend` directory and run `npm install` to install dependencies. Then run `npm start` to start the server.
2. To run the frontend client, navigate to the `ui` & `api` directory and run `npm install` to install dependencies in both directories. Then run `npm run dev` to start the client.
