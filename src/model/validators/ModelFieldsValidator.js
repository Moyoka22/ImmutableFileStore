const NumberField = require("../fields/NumberField");
const StringField = require("../fields/StringField");

const NumberFieldValidator = require("./NumberFieldValidator");
const StringFieldValidator = require("./StringFieldValidator");

module.exports = class Validator {
  constructor(fields) {
    this._fields = fields;
    this._validators = {};
    for (field of fields) {
      const cls = this.getValidatorClass(field);
      this._validators[field.name] = cls();
    }
  }

  getValidatorClass(field) {
    if (field instanceof NumberField) return NumberFieldValidator;
    if (field instanceof StringField) return StringFieldValidator;
    throw new Error(`Validator class not found for field ${field.name}`);
  }
  validate(data) {
    if (Object.is(data, null)) return true;
    for (key of data) {
      const validator = this._validators[key];
      if (Object.is(validator, undefined))
        throw new Error(`Validator for field ${key} not found.`);
      const value = data[key];

      if (!validator.validate(value))
        throw new Error(`Validation error on field ${key} in ${data}.`);
    }
  }
};
