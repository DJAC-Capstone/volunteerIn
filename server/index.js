const express = require ('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const chalk = require('chalk')

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
app.get('*', (req, res)=> {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.status = 404;
  next(err)
})

app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send(`Internal Server Error: ${err.message}`);
})

async function startServer () {
  try {
    // console.log(chalk.green('Database is syncing'))
    // await db.sync()
    const PORT = process.env.PORT || 3030
    await app.listen(PORT, () => {
      console.log(chalk.green(`Listening on port: ${PORT}`))
    })
  } catch (e) {
    console.log(chalk.red('Failed to start server'))
    console.error(e)
  }
}

startServer()