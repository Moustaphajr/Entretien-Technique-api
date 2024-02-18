const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(
      "mongodb+srv://mouha:passer12@blogtuts.4ymh827.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(() => console.log("you are connected sucessfully to the database "))
    .then((error) => console.log(error));
}

module.exports = connect;
