const sum = (a,b) => {
    return a+b;
}

test('sum', () => {
    expect(sum(3,4)).toBe(7);
    expect(sum(3,9)).toBe(12);
})