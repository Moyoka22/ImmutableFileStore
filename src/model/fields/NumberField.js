const Field = require("./Field");

module.exports = class NumberField extends Field {
  constructor(name) {
    super(name, Number);
  }
};
