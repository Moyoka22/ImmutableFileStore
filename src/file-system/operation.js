module.export = class Operation {
  static types = {
    ADD: 1,
    GET: 2,
    UPDATE: 3,
    DELETE: 4,
  };

  constructor(type, modelName, data = null) {
    if (Object.is(Operation.types[type], undefined))
      throw new Error(`Invalid operation ${type}.`);

    this.type = type;
    this.modelName = modelName;
    this.data = data;
  }
};
