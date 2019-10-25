// Going to deal with authentication
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//Load validation
const validateProfileInput = require("../../validation/profile");

//Load Profile model
const Profile = require("../../models/Profile");
//Load User Profile
const User = require("../../models/User");

//Instead of using app.get() like we did in app.js, use router.get() or router.post() to handle requests

//For /api/users/test, only have to use router.get('/test') here because /api/users is already handled in app.js

//res.json is similar to res.send (used to output hello world), but it outputs json

//This will output a 200 status, meaning 'everything's okay'
// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile works!" }));

// @route   GET api/profile
// @desc    Get current user's profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", "name")
      .then(profile => {
        // If there's no profile, send an error
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        // If there is a profile, send the profile
        res.json(profile);
      })
      .catch(error => res.status(404).json(error));
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", "email")
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        // return res.status(404).json(errors);
        return res.status(404).json(profiles);
      }
      res.json(profiles);
    })
    .catch(err => {
      res.status(404).json({ profile: "There are no profiles to display." });
    });
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
// req.params.handle grabs the ":handle" in the URL
router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate("user", "firstName")
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user.";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => {
      res.status(404).json({ profile: "There is no profile for this user." });
    });
});

// @route   GET api/user/:user_id
// @desc    Get profile by user ID
// @access  Public
// req.params.handle grabs the ":handle" in the URL
router.get("/user/:user_id", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate("user", "firstName")
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user.";
        res.status(404).json(errors);
      }
      res.json({ profile: "There is no profile for this user." });
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.firstName) profileFields.firstName = req.body.firstName;
    if (req.body.lastName) profileFields.lastName = req.body.lastName;
    if (req.body.city) profileFields.city = req.body.city;
    if (req.body.state) profileFields.state = req.body.state;
    if (req.body.zip) profileFields.zip = req.body.zip;
    if (req.body.phoneNumber) profileFields.phoneNumber = req.body.phoneNumber;
    if (req.body.selectedDistance) profileFields.selectedDistance = req.body.selectedDistance;
    if (typeof req.body.selectedCertifications !== "undefined") {
      profileFields.selectedCertifications = req.body.selectedCertifications.split(",");
    }
    // if (req.body.selectedCertifications) profileFields.selectedCertifications = req.body.selectedCertifications;
    // if (req.body.selectedSpecializations) profileFields.selectedSpecializations = req.body.selectedSpecializations;
    if (typeof req.body.selectedSpecializations !== "undefined") {
      profileFields.selectedSpecializations = req.body.selectedSpecializations.split(",");
    }
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.website) profileFields.website = req.body.website;
    
    // Social media
    profileFields.socialMedia = {};
    if (req.body.twitter) profileFields.socialMedia.twitter = req.body.twitter;
    if (req.body.facebook)
      profileFields.socialMedia.facebook = req.body.facebook;
    if (req.body.instagram)
      profileFields.socialMedia.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update already existing profile
        // Update profile with whatever fields are coming in
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
          // Respond with updated profile
        ).then(profile => res.json(profile));
      } else {
        // Create new profile

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Save profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;

// In order to access a private route, you'll have to send a token along with it. You get // the token by registering and then logging in, then it sends you a token - you then ////// send that token with your request
