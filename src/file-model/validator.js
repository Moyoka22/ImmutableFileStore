module.exports = class FileModelValidator {
  constructor(fields) {
    this._fields = fields;
  }
  validate(data) {
    for (key of data) {
      const field = this._fields.get_field(key);
      if (!field.validate(data))
        throw new Error(`Validation error on field ${key} in ${data}.`);
    }
  }
};
