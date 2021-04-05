const { Fields } = require("./fields");
const ModelIO = require("./ModelIO");
const { ModelFieldsValidator } = require("./validators");

module.exports = class Model {
  constructor(name, fields, IODevice) {
    this.name = name;
    this._fields = Fields(name, fields);
    this._validator = ModelFieldsValidator(this._fields);

    if (!(ioDevice instanceof ModelIO))
      throw new Error("Invalid IO device supplied.");
    const ioDevice = IODevice();
    this.io = ioDevice;
    this._writer = ioDevice.writer;
    this._reader = ioDevice.reader;
  }
  async add(data) {
    this._validator.validate(data);
    return await this._writer.createOperation(data);
  }
  async delete(item_id) {
    return await this._writer.deleteOperation(item_id);
  }
  async get(item_id) {
    return await this._reader.readOperation(item_id);
  }
  async update(item_id, data) {
    this._validator.validate(data);
    return await this._writer.updateOperation(item_id, data);
  }
};
