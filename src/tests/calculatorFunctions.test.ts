import {
  basic_Salary,
  calculateTotalEarnings,
  calculateTotalEarningsForEPF,
  calculateGrossDeduction,
  calculateGrossEarnings,
  calculateGrossSalaryForEPF,
  calculateEmployeeEPF,
  calculateEmployerEPF,
  calculateEmployerETF,
  calculateCostToCompany,
} from "../Components/calculatorFunctions";

describe("calculatorFunctions", () => {
  test("basic_Salary returns the basic salary", () => {
    expect(basic_Salary(1000)).toBe(1000);
  });

  test("calculateTotalEarnings calculates the total earnings correctly", () => {
    expect(calculateTotalEarnings(1000, ["200", "300"])).toBe(1500);
    expect(calculateTotalEarnings(1000, ["", "300"])).toBe(1300);
  });

  test("calculateTotalEarningsForEPF calculates the total earnings for EPF correctly", () => {
    expect(
      calculateTotalEarningsForEPF(1000, ["200", "300"], [true, false])
    ).toBe(1200);
    expect(
      calculateTotalEarningsForEPF(1000, ["200", "300"], [true, true])
    ).toBe(1500);
  });

  test("calculateGrossDeduction calculates the gross deduction correctly", () => {
    expect(
      calculateGrossDeduction(["200", "300"], ["Deduction 1", "Deduction 2"])
    ).toBe(500);
    expect(calculateGrossDeduction(["200", ""], ["Deduction 1", ""])).toBe(200);
  });

  test("calculateGrossEarnings calculates the gross earnings correctly", () => {
    expect(
      calculateGrossEarnings(1000, ["200", "300"], ["200"], ["Deduction 1"])
    ).toBe(1300);
  });

  test("calculateGrossSalaryForEPF calculates the gross salary for EPF correctly", () => {
    expect(
      calculateGrossSalaryForEPF(
        1000,
        ["200", "300"],
        ["200"],
        ["Deduction 1"],
        [true, true]
      )
    ).toBe(1300);
  });

  test("calculateEmployeeEPF calculates the employee EPF correctly", () => {
    expect(calculateEmployeeEPF(1000, ["200", "300"], [true, true])).toBe(120);
  });

  test("calculateEmployerEPF calculates the employer EPF correctly", () => {
    expect(calculateEmployerEPF(1000, ["200", "300"], [true, true])).toBe(180);
  });

  test("calculateEmployerETF calculates the employer ETF correctly", () => {
    expect(calculateEmployerETF(1000, ["200", "300"], [true, true])).toBe(45);
  });

  test("calculateCostToCompany calculates the cost to company correctly", () => {
    expect(
      calculateCostToCompany(
        1000,
        ["200", "300"],
        ["200"],
        ["Deduction 1"],
        [true, true]
      )
    ).toBe(1300 + 180 + 45);
  });
});
