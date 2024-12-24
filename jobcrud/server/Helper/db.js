const mongoose = require('mongoose')


const db=mongoose.connect("mongodb://127.0.0.1:27017/jobcrud")
.then(() => console.log("Mongodb Connected Sucessfully"))
.catch((err) => console.log(err));

module.exports = db 