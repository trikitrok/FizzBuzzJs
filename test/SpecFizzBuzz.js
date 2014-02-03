
describe("fizbuzz", function () {
  it("returns empty string for empty list", function () {
    expect(fizzbuzz([])).toBe("");
  });

  it("returns 1 for [1]", function () {
    expect(fizzbuzz([1])).toBe("1");
  });

  it("returns Fizz for [3]", function () {
    expect(fizzbuzz([3])).toBe("Fizz");
  });

  it("returns Fizz for [9]", function () {
    expect(fizzbuzz([9])).toBe("Fizz");
  });

  it("returns Buzz for [5]", function () {
    expect(fizzbuzz([5])).toBe("Buzz");
  });

  it("returns Buzz for [25]", function () {
    expect(fizzbuzz([25])).toBe("Buzz");
  });

  it("returns FizzBuzz for [15]", function () {
    expect(fizzbuzz([15])).toBe("FizzBuzz");
  });

  it("processes a list with several items", function () {
    expect(fizzbuzz([1, 2, 15])).toBe("1 2 FizzBuzz");
  });
});