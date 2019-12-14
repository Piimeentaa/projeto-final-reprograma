require('dotenv-safe').load()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

function connect () {
  mongoose.connect(MONGO_URI,
    { useNewUrlParser: true },
    function (error) {
      if(error) {
        console.error("Ocorreu um erro: ", error)
      } else {
        console.log("Conectado no mongoDB.")
      }
    }
  );
}

module.exports = { connect }