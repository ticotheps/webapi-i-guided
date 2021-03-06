const express = require('express'); // CommonJS Modules
// the same as 'import express from "express"'; // ES2015 Modules

const db = require('./data/db.js'); // Imports the db.js file into this file

const server = express();
server.use(express.json()); // *** Add this middleware to teach express how 
                            // to parse JSON (to make POST and PUT requests work) ***

server.get('/', (req, res) => {
    res.send('Hello Web XVII');
});

// write a GET /now endpoint that returns current date and time as a string
server.get('/now', (req, res) => {
    const now = new Date().toISOString();
    res.send(now);
});

// CRUD operations

// The 'R' in CRUD
server.get('/hubs', (req, res) => {
    db.hubs
        .find()
        .then(hubs => {
            // 200-299 = success
            // 300-399 = rediret
            // 400-499 = client error
            // 500-599 = server error
            res.status(200).json(hubs); // This is saying return a status code '200' as well as the 'hubs' object
        })
        .catch(error => {
            // handle it
            res.status(500).json({ message: 'error retrieving hubs' });
        });
});

// The 'C' in CRUD
server.post('/hubs', (req, res) => {
    // read the data for the hub
    const hubInfo = req.body; // 'the body' is the content of the request
    console.log('hub information', hubInfo);

    // add the hub to our db
    db.hubs
        .add(hubInfo)
        .then(hub => {
            res.status(201).json(hub);
        })
        .catch(error => {
            res.status(500).json({ message: 'error creating hub' });
        });
});

// The 'D' in CRUD
server.delete('/hubs/:id', (req, res) => {
    // read the data for the hub
    const id = req.params.id; // this is an object that express will grab and place a key on that dynamic id

    // tells the hubs to remove the hub with the specific id from our db
    db.hubs
        .remove(id)
        .then(deleted => {
            res.status(204).end(); // tells the client the request is done
        })
        .catch(error => {
            res.status(500).json({ message: 'error deleting the hub' });
        });
});

// The 'U' in CRUD
server.put('/hubs/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    db.hubs
      .update(id, changes)
      .then(updated => {
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({ message: 'hub not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'error updating the hub' });
      });
  });


server.listen(4000, () => {
    console.log('\n** API up and running on port 4K **');
});

// Step 1: Run 'Yarn' (downloads the dependancies)
// Step 2: 'Yarn add express' (Installs the dependancy)
// Step 3: 'add index.js' into the same directory as your package.json - save (Required to run the server!)
// Step 4: yarn server into the terminal (Starts up your server)
// Step 5: Go to localhost:4000 in your browser.

// npm run server vs yarn server