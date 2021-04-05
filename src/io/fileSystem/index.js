const Adapter = require("./Adapter");
const Reader = require("./Reader");
const Writer = require("./Writer");

module.exports = {
  FileSystemAdapter: Adapter,
  FileSystemWriter: Writer,
  FileSystemReader: Reader,
};
