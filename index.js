const express = require('express'); // CommonJS Modules
// the same as 'import express from "express"'; // ES2015 Modules

const server = express();

server.listen(4000, () => {
    console.log('\n** API up and running on port 4K **');
});

// STEP-by-STEP
// run yarn => downloads dependencies
// yarn add express
// yarn server
// add index.js

// npm run server vs yarn server