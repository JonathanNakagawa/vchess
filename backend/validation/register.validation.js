const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterData(data) {
    let errors = {};

    // Convert empty fields to empty strings
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.name = "Email field is required";
    }
    if (Validator.isEmpty(data.password)) {
        errors.name = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.name = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
      }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
      }

    return {errors, isValid: isEmpty(errors)};
};