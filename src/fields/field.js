class Field {
  constructor(name, type) {
    if (Object.is(name, undefined)) throw new Error("Name is required.");
    this.name = name;
    this.type = type;
  }
  validate() {
    throw new Exception("Not Implemented. Field must be overriden.");
  }
}

exports.Field = Field;

exports.NumberField = function NumberField(name) {
  const field = new Field(name, String);
  field.validate = (data) => {
    return typeof data === "number";
  };
  return field;
};

exports.StringField = function StringField(name) {
  const field = new Field(name, String);
  field.validate = (data) => {
    return typeof data === "string";
  };
  return field;
};
