const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const images = require("./routes/api/images");

const app = express();

// Database configuration
const db = require("./config/keys").mongoURI;

// Connect to MongoDB through Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));
  

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());

// Required for GridFS delete queries
app.use(methodOverride('_method'));
let gfs;
var conn = mongoose.createConnection(db);
  conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  });



// Passport configuration - passport uses what's called a "strategy"
require("./config/passport")(passport); // Pass in Passport to the Passport config

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/images", images);

// const port = process.env.PORT || 5000;
const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

//JWT module creates the JSON Web Token, and then Passport and Passport-JWT validate the token and extract the user's information from it
