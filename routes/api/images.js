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
router.post(
  "/upload", upload.single('file'), (req, res) => {
    res.json({file: req.file});
  });


module.exports = router;
