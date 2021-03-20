const express = require('express');
const path = require('path');

// const router = require('../routes/router');
const syncAndSeed = require('../db/syncAndSeed');

const PORT = process.env.PORT || 1813;
// const morgan = require('morgan')

const app = express();

app.use('/api', require('../routes/router'));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, './index.html'));
  } catch (error) {
    next(error);
  }
});

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
