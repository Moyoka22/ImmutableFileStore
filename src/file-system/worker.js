const fs = require("fs");

const Operation = require("./operation");
const transformer = require("./transformer");

module.exports.Worker = class Worker {
  constructor({ path }) {
    this._path = path;
    if (!fs.existsSync(path)) {
      fs.writeSync(path, "");
    }
  }
  async execute(operation) {
    switch (operation.type) {
      case Operation.types.ADD:
      case Operation.types.UPDATE:
      case Operation.types.DELETE:
        await this._handlePutOperation(operation);
        break;
      case Operation.types.GET:
        result = await this._handleGetOperation(operation);
    }
    return result;
  }
  async _handlePutOperation(operation) {
    const fileContent = await fs.promises.readFile(path);
    const newOperations = transformer.createNewOperations(
      operation,
      fileContent
    );
    await fs.write.promises(this._path, newOperations);
  }
  async _handleGetOperation() {
    const fileContent = await fs.promises.readFile(path);
    return transformer.getObject(fileContent, operation);
  }
};
