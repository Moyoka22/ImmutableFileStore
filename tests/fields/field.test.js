const { NumberField, StringField } = require("../../src/fields/field");

describe("Field validation", () => {
  test("Number field validation passes with a number argument", () => {
    const field = NumberField("field");
    expect(field.validate(5)).toBe(true);
  });
  test("Number field validation fails  with a string argument", () => {
    const field = NumberField("field");
    expect(field.validate("5")).toBe(false);
  });
  test("Number field validation fails  with an object argument", () => {
    const field = NumberField("field");
    expect(field.validate({ a: 1 })).toBe(false);
  });
  test("String field validation passes with a number argument", () => {
    const field = StringField("field");
    expect(field.validate("5")).toBe(true);
  });
  test("String field validation passes with a number argument", () => {
    const field = StringField("field");
    expect(field.validate(5)).toBe(false);
  });
  test("String field validation fails  with an object argument", () => {
    const field = StringField("field");
    expect(field.validate({ a: 1 })).toBe(false);
  });
});
