module.exports = class Writer {
  constructor() {}
  async createOperation(data) {
    throw new Error("Not Implemented.");
  }
  async deleteOperation(item_id) {
    throw new Error("Not Implemented.");
  }
  async updateOperation(item_id, data) {
    throw new Error("Not Implemented.");
  }
};
