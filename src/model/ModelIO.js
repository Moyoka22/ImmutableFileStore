const Reader = require("./Reader");
const Writer = require("./Writer");

module.exports = class ModelIO {
  constructor(writer, reader) {
    if (!(writer instanceof Writer))
      throw new Error("Writer is not a valid writer instance.");
    if (!(reader instanceof Reader))
      throw new Error("Reader is not a valid reader instance.");
    this.writer = writer;
    this.reader = reader;
  }
};
