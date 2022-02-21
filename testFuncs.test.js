const testFuncs = require('./testFuncs')

test('Add 2 + 2 to equal 4', () => {
    expect(testFuncs.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
    expect(testFuncs.add(2, 2)).not.toBe(5);
})