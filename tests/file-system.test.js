const fs = require("fs");
const path = require("path");

const Worker = require("../../src/file-system/worker");

describe("Worker writer class.", () => {
  let testWorker = null;
  beforeAll(() => {
    const testDirPath = path.resolve("..", "..", "testDir");
    if (!fs.existsSync(testDirPath)) {
      fs.mkdirSync(testDirPath);
    }
    const testJsonPath = path.join(testDirPath, "test_json.json");

    testWorker = new Worker({ path: testJsonPath });
  });

  it("runs a put operation", () => {
    testWorker.execute();
  });

  afterAll(() => {
    test = null;
  });
});
