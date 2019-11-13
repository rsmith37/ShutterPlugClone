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

// Create storage engine / object for GridFS
const storage = new GridFsStorage({
    url: db,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

  router.get("/test", (req, res) => res.json({ msg: "Images works!" }));

// @route   POST api/images/upload
// @desc    Upload an image
// @access  Public (for now)
// router.post(
//   "/upload", upload.single('file'), (req, res) => {
//     res.json({file: req.body.file, test: "Post /upload worked!", filename: req.body.file.filename, fileinfo: req.body.file.fileInfo});
//   });
router.post('/upload', (req, res) => {
  let newImage = new Image();
  newImage.pic.data = fs.readFileSync("/Users/ryancunico/Desktop/shadowme.jpg");
  newImage.pic.contentType = 'image/png';
  newImage.save();
  res.json({success: "it worked"})
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
