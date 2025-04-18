const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://AmanK:aman1234@nodejsprojects.vx1x9.mongodb.net/03-TaskManager?retryWrites=true&w=majority&appName=NodejsProjects";

// if we are running this (we are using the version 5 of the mongoose , so we will get some of the difercation . to remove it we need to add some function . )
//note : if using version 6.^ or above no need to do this
// mongoose
//   .connect(
//     connectionString,
//     { useNewUrlParser: true },
//     { useCreateIndex: true },
//     { useFindAndModify: false },
//     { useUnifiedTopology: true }
//   )
//   .then(() => console.log("Connected to the db..."))
//   .catch((err) => console.log(err));

// all the above method are good, buut what if we want to connect to our db , and if the connection is successful then return th promise, else terminate the program : for that u need to do below method

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
