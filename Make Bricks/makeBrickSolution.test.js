const makeBrick = require("./makeBrickSolution");

test('Expect small:3 big:1 to equal 8', () => {
    expect(makeBrick(3, 1, 8)).toEqual(true);
});

test('Expect small:3 big:1 to equal 9', () => {
    expect(makeBrick(3, 1, 9)).toEqual(false);
});

test('Expect small:3 big:2 to equal 10', () => {
    expect(makeBrick(3, 2, 10)).toEqual(true);
});

test('Expect small:3 big:2 to equal 9', () => {
    expect(makeBrick(3, 2, 9)).toEqual(false);
});

test('Expect small:6 big:0 to equal 11', () => {
    expect(makeBrick(6, 0, 11)).toEqual(false);
});

test('Expect small:0 big:3 to equal 10', () => {
    expect(makeBrick(0, 3, 10)).toEqual(true);
});

test('Expect small:7 big:1 to equal 11', () => {
    expect(makeBrick(7, 1, 11)).toEqual(true);
});

test('Expect small:40 big:1 to equal 46', () => {
    expect(makeBrick(40, 1, 46)).toEqual(false);
});