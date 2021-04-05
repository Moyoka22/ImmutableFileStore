const IReader = require("../../model/Reader");

module.exports = class Reader extends IReader {
  getOperation(fileContent) {
    const itemId = operation.itemId;
    const operations = JSON.parse(fileContent);
    const itemHistory = operations.filter((op) => op.data.itemId === itemId);
    if (itemHistory.length === 0) return null;
    return itemHistory[itemHistory.length - 1].data;
  }
};
