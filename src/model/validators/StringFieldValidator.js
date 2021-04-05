const Validator = require("./Validator");

module.exports = class StringFieldValidator extends Validator {
  validate(data) {
    return typeof data === "string";
  }
};
