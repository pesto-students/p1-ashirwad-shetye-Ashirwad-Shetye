const checking = require('./jest');

test('adds, subtracts and multiplies numbers', () => {
    expect(checking.sum(1, 2)).toBe(3);
    expect(checking.diff(3, 2)).toBe(1);
    expect(checking.product(2, 3)).toBe(6);
})