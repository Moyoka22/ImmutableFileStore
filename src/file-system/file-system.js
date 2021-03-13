const fs = require("fs");
const path = require("path");

const Operation = require("./operation");

class FileSystem {
  static DATA_DIR = path.join("..", "..", "data");
  constructor() {
    this._worker = Worker();
  }

  async execute(operation) {
    if (!operation instanceof Operation)
      throw new Error("Invalid object dispatched. Not an operation.");
    return await this._worker.execute(operation);
  }
}
const fileSystem = FileSystem();

module.exports = fileSystem;
