module.exports = class Fields {
  constructor(modelName, fields) {
    this._modelName = modelName;
    for (field of fields) {
      if (!field instanceof Field) {
        throw new Error("Invalid field supplied to model iniitlaizer.");
      }
      this._fields.append(field);
    }
  }
  get_field(fieldName) {
    const field = this._fields.find((field) => field.name == fieldName);
    if (Object.is(field, undefined))
      throw new Error(`Field ${fieldName} not in fields of ${modelName}.`);
  }
};
