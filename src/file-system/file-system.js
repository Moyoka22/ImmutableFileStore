const path = require("path");

const Operation = require("./operation");

class FileSystem {
  static DATA_DIR = path.join("..", "..", "data");
  constructor() {}

  async execute(operation) {
    if (!operation instanceof Operation)
      throw new Error("Invalid object dispatched. Not an operation.");
    const data_file_path = FileSystem.DATA_DIR.join(`${operation.type}.json`);
    const worker = new Worker(data_file_path);
    return await this._worker.execute(operation);
  }
}
const fileSystem = FileSystem();

module.exports.fileSystem = fileSystem;
