module.exports.createNewOperations = function createNewOperations(
  fileContent,
  operation
) {
  const operations = JSON.parse(fileContent);
  const newOperations = [...operations, operation];
  return JSON.stringify(newOperations);
};

module.exports.getObject = function getObject(fileContent, operation) {
  const itemId = operation.itemId;
  const operations = JSON.parse(fileContent);
  const itemHistory = operations.filter((op) => op.data.itemId === itemId);
  if (itemHistory.length === 0) return null;
  return itemHistory[itemHistory.length - 1].data;
};
