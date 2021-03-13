const Fields = require("../fields/fields");
const Validator = require("./validator");
const { fileSystem, Operation } = require("../file-system");

module.exports = class FileModel {
  constructor(name, fields) {
    this.name = name;
    this._fields = Fields(name, fields);
    this._validator = Validator(this._fields);
  }
  add(data) {
    this._validator.validate(data);
    const operation = Operation(Operation.types.ADD, this.name, data);
    fileSystem.execute(operation);
  }
  delete(item_id) {
    const operation = Operation(Operation.types.GET, this.name, item_id);
    fileSystem.execute(operation);
  }
  async get(item_id) {
    const operation = Operation(Operation.types.GET, this.name, item_id);
    return await fileSystem.execute(operation);
  }
  update(item_id, data) {
    this._validator.validate(data);
    const operation = Operation(Operation.types.GET, this.name, {
      item_id,
      _data: data,
    });
    fileSystem.execute(operation);
  }
};
