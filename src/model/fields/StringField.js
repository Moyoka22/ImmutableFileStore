const Field = require("./Field");

module.exports = class StringField extends Field {
  constructor(name) {
    super(name, String);
  }
};
