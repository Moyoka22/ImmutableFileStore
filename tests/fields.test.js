const { NumberField, StringField } = require("../../src/fields/field");
const { Fields } = require("../../src/fields/fields");

describe("Field validation", () => {
  it("correctly validates a number in number field.", () => {
    const field = NumberField("field");
    expect(field.validate(5)).toBe(true);
  });
  it("rejects a string when validating a number field.", () => {
    const field = NumberField("field");
    expect(field.validate("5")).toBe(false);
  });
  it("rejects an object when validating a number field.", () => {
    const field = NumberField("field");
    expect(field.validate({ a: 1 })).toBe(false);
  });
  it("correctly validates a string in a string field.", () => {
    const field = StringField("field");
    expect(field.validate("5")).toBe(true);
  });
  it("rejects a number when validating a string field.", () => {
    const field = StringField("field");
    expect(field.validate(5)).toBe(false);
  });
  it("rejects an object when validating a string field.", () => {
    const field = StringField("field");
    expect(field.validate({ a: 1 })).toBe(false);
  });
});

describe("Field validation", () => {
  it("instantiates a field without crashing.", () => {
    const fields = Fields([NumberField("someNum"), StringField("someString")]);
  });
  it("rejects non-unique field names.", () => {
    expect(() =>
      Fields([NumberField("someNum"), StringField("someNum")])
    ).toThrowError("Field names must be unique");
  });
});
