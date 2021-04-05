const Validator = require("./Validator");

module.exports = class NumberFieldValidator extends Validator {
  validate(data) {
    return typeof data === "number";
  }
};
