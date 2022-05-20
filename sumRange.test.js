const sumRange = require('./sumRange');

test('adds 10+9+8+7+6+5+4+3+2+1', () => {
    expect(sumRange(10)).toBe(55);
});

test('add 1', () => {
    expect(sumRange(1)).toBe(1);
});

test('add 0', () => {
    expect(sumRange(0)).toBe(0);
});

