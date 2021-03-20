const { NumberField, StringField } = require("../../src/fields/field");
const { Fields } = require("../../src/fields/fields");

describe("Field validation", () => {
  test("field instantiated without crashing.", () => {
    const fields = Fields([NumberField("someNum"), StringField("someString")]);
  });
  test("field names must be unique", () => {
    expect(() =>
      Fields([NumberField("someNum"), StringField("someNum")])
    ).toThrowError("Field names must be unique");
  });
});
