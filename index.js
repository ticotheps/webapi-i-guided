const express = require('express'); // CommonJS Modules
// the same as 'import express from "express"'; // ES2015 Modules

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Web XVII');
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