module.exports = class Field {
  constructor(name, type) {
    if (Object.is(name, undefined)) throw new Error("Name is required.");
    if (Object.is(type, undefined)) throw new Error("Type is required.");
    this.name = name;
    this.type = type;
  }
};
