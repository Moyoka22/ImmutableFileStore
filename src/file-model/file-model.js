const Fields = require("../fields/fields");
const Validator = require("./validator");
const { fileSystem, Operation } = require("../file-system");

module.exports.FileModel = class FileModel {
  
  constructor(name, fields) {
    this.name = name;
    this._fields = Fields(name, fields);
    this._validator = Validator(this._fields);
  }
  add(data) {
    const operation = this._createOperation(Operation.types.ADD, null, data);
    return await fileSystem.execute(operation);
  }
  delete(item_id) {
    const operation = this._createOperation(Operation.types.GET, item_id, null);
    fileSystem.execute(operation);
  }
  async get(item_id) {
    const operation = this._createOperation(Operation.types.GET, item_id, null);
    return await fileSystem.execute(operation);
  }
  update(item_id, data) {
    const operation = this._createOperation(Operation.types.GET, item_id, data);
    fileSystem.execute(operation);
  }
   _createOperation(type,item_id,data){
    this._validator.validate(data);
    return Operation(type,this.name,null,data)
  }
};
