const testFuncs = require("./testFuncs");

test("Add 2 + 2 to equal 4", () => {
  expect(testFuncs.add(2, 2)).toBe(4);
});

test("Add 2 + 2 to NOT equal 5", () => {
  expect(testFuncs.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(testFuncs.isNull()).toBe(null);
});

test("Should be falsy", () => {
  expect(testFuncs.checkValue(null)).toBeFalsy();
});
// toEqual for complex data types, toBe for primitives
test("User should be Joe Nedmond object", () => {
  expect(testFuncs.createUser()).toEqual({
    firstName: "Joe",
    lastName: "Nedmond",
  });
});

// less than or greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;

    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'jessica', 'admin'];
    expect(usernames).toContain('admin')
})