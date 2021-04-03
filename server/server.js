const express = require('express');
const path = require('path');

const syncAndSeed = require('../db/syncAndSeed');

const PORT = process.env.PORT || 1813;

const app = express();
const { static } = express;

app.use(express.json());
app.use('/api', require('../routes/router'));
app.use(static(path.join(__dirname, './public')));

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
