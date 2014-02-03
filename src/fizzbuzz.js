var fizzbuzz = function (numbers) {
  var fizzbuzz_one = function (number) {
    var res = "";

    if (number % 3 == 0)
      res += "Fizz";

    if (number % 5 == 0)
      res += "Buzz";

    if (res == "")
      res = String(number);

    return res;
  };

  return (function f(acc, rest) {
    if (rest.length == 0)
      return acc;
    else if (rest.length == 1)
      return acc + fizzbuzz_one(rest[0]);
    else
      return f (acc + fizzbuzz_one(rest[0]) + " ", rest.slice(1));
  })("", numbers);
};