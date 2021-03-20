const path = require("path");

const Operation = require("./operation");

class FileSystem {
  static DATA_DIR = path.join("..", "..", "data");
  constructor(dirPath) {
    this._dirPath = dirPath;
    if (Object.is(undefined, this._dirPath))
      this._dirPath = FileSystem.DATA_DIR;
  }

  async execute(operation) {
    if (!operation instanceof Operation)
      throw new Error("Invalid object dispatched. Not an operation.");
    const data_file_path = this._dirPath.join(`${operation.modelName}.json`);
    const worker = new Worker(data_file_path);
    return await worker.execute(operation);
  }
}
const fileSystem = FileSystem();

module.exports.fileSystem = fileSystem;
