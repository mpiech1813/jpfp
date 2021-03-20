const express = require('express');

const syncAndSeed = require('../db/syncAndSeed');

// const morgan = require('morgan')

const app = express();

const PORT = process.env.PORT || 1813;

const run = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`
                app listening on ${PORT}

                http://localhost:${PORT}
            `);
    });
    await syncAndSeed();
  } catch (error) {
    console.log(error);
  }
};

run();
