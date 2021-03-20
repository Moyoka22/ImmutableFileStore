const OPERATION_TYPES = new Enum(["ADD", "GET", "UPDATE", "DELETE"]);

module.export.Operation = class Operation {
  static types = OPERATION_TYPES;

  constructor(type, modelName, item_id, data) {
    if (Object.is(Operation.types[type], undefined))
      throw new Error(`Invalid operation ${type}.`);

    this.type = type;
    this.modelName = modelName;
    this.itemId = itemId;
    this.data = data;
  }
};
