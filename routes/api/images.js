// Going to deal with authentication
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const db = require("../../config/keys").mongoURI;
const fs = require('fs')
const Image = require('../../models/Image')

const app = express();


//   const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

  router.get("/test", (req, res) => res.json({ msg: "Images works!" }));

// @route   POST api/images/upload
// @desc    Upload an image
// @access  Public (for now)
// router.post(
//   "/upload", upload.single('file'), (req, res) => {
//     res.json({file: req.body.file, test: "Post /upload worked!", filename: req.body.file.filename, fileinfo: req.body.file.fileInfo});
//   });
// router.post('/upload', (req, res) => {
//   let newImage = new Image();
//   newImage.pic.data = fs.readFileSync("/Users/ryancunico/Desktop/shadowme.jpg");
//   newImage.pic.contentType = 'image/png';
//   newImage.save();
//   res.json({success: "it worked"})
// })

router.post('/upload', upload.single('file'), (req, res, next) => {
  let newImage = new Image();
  const image = req;
  image.file.data = fs.readFileSync(req.file.path);
  image.file.contentType = req.file.mimetype;
  newImage.pic.data = image.file.data;
  newImage.pic.contentType = image.file.contentType;
  newImage.save();
  res.json({success: "it worked"});
})

// router.get('/pics', (req, res) => {
//   Image
//     .find()
//     .then(img => {
//       res.contentType(img.pic.contentType)
//       res.send(img.pic.data)
//     })
// })

router.get('/pics', (req, res) => {
    Image.findOne({}, function(err, pic) {
        if (err)
            res.send(err);
        console.log("PIC: " + pic.Image.data);
        res.contentType('json');
        res.send(pic);
    });
})

module.exports = router;
