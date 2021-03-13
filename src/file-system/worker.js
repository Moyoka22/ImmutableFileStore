const fs = require("./fs");

const Operation = require("./operation");

module.exports = class Worker {
  constructor(path) {
    this._path = path;
    this._opQueue = [];
    setInterval(this._flush, 200);
  }
  async execute(operation) {
    switch (operation.type) {
      case Operation.types.ADD:
        await this._handleAddOperation(operation);
        break;
      case Operation.types.GET:
        result = await this._handleGetOperation(operation);
        break;
      case Operation.types.UPDATE:
        await this._handleUpdateOperation(operation);
        break;
      case Operation.types.DELETE:
        await this._handleDeleteOperation(operation);
        break;
    }
    return result;
  }
  async _flush() {}
  async _handleAddOperation(operation) {
    this._opQueue.push();
  }
  async _handleGetOperation() {}
  async _handleUpdateOperation() {}
  async _handleDeleteOperation() {}
};
