const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Even though these tests are being put on the server, this validation is going to come from the client, go through the server, and get sent back to the client

  // If data.name is not empty, then it stays what it is (data.name), otherwise is gets changed to an empty string so it can be passed as an empty string into the function below (Validator.isEmpty)

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.usertype = !isEmpty(data.usertype) ? data.usertype : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "First name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.usertype)) {
    errors.usertype = "User type (client or artist) is required";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid email address";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
