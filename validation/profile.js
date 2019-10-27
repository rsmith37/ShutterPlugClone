const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // data.handle = !isEmpty(data.handle) ? data.handle : "";

  // if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
  //   errors.handle = "Handle needs to be between 2 and 40 characters";
  // }

  // if (Validator.isEmpty(data.handle)) {
  //   errors.handle = "Profile handle is required";
  // }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State is required";
  }

  if (Validator.isEmpty(data.zip)) {
    errors.zip = "Zip code is required";
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number is required";
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = "Short biography is required";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
