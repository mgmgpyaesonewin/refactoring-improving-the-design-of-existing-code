const invoices = require("./invoices.json");
const plays = require("./plays.json");
const statement = require("./index");

test("result is correct", () => {
  let expected =
    "Statement for BigCo Hamlet: $650.00 (55 seats) As You Like It: $580.00 (35 seats) Othello: $500.00 (40 seats)Amount owed is $1,730.00You earned 47 credits";

  let result = statement(invoices[0], plays);

  expect(expected).toBe(result);
});
