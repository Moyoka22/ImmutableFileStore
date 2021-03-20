const { Field } = require("./field");

class Fields {
  constructor(fields) {
    this._fieldMap = {};
    for (let field of fields) {
      if (!field instanceof Field) {
        throw new Error("Invalid field supplied to model initializer.");
      }
      const fieldName = field.name;
      if (fieldName in this._fieldMap)
        throw new Error("Field names must be unique.");
      this._fieldMap[fieldName] = field;
    }
  }
  get_field(fieldName) {
    const field = this._fields[fieldName];
    if (Object.is(field, undefined))
      throw new Error(`Field ${fieldName} not in fields.`);
  }
}

exports.Fields = (fields) => {
  return new Fields(fields);
};
