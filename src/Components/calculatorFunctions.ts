export const basic_Salary = (basicSalary: number) => {
  return basicSalary;
};

export const calculateTotalEarnings = (
  basicSalary: number,
  amountEarnings: string[]
) => {
  let total = basicSalary;
  amountEarnings.forEach((value) => {
    if (value) {
      total += parseInt(value);
    }
  });
  return total;
};

export const calculateTotalEarningsForEPF = (
  basicSalary: number,
  amountEarnings: string[],
  epfEtfCheckedIndex: boolean[]
) => {
  let total = basicSalary;
  amountEarnings.forEach((value, index) => {
    if (value && epfEtfCheckedIndex[index]) {
      total += parseInt(value);
    }
  });
  return total;
};

export const calculateGrossDeduction = (
  amountDeduction: string[],
  payDetailsDeduction: string[]
) => {
  let grossDeduction = 0;
  amountDeduction.forEach((value, index) => {
    if (value && payDetailsDeduction[index]) {
      grossDeduction += parseInt(value);
    }
  });
  return grossDeduction;
};

export const calculateGrossEarnings = (
  basicSalary: number,
  amountEarnings: string[],
  amountDeduction: string[],
  payDetailsDeduction: string[]
) => {
  let totalGrossEarnings =
    calculateTotalEarnings(basicSalary, amountEarnings) -
    calculateGrossDeduction(amountDeduction, payDetailsDeduction);
  return totalGrossEarnings;
};

export const calculateGrossSalaryForEPF = (
  basicSalary: number,
  amountEarnings: string[],
  amountDeduction: string[],
  payDetailsDeduction: string[],
  epfEtfCheckedIndex: boolean[]
) => {
  let total =
    calculateTotalEarningsForEPF(
      basicSalary,
      amountEarnings,
      epfEtfCheckedIndex
    ) - calculateGrossDeduction(amountDeduction, payDetailsDeduction);
  return total;
};

export const calculateEmployeeEPF = (
  basicSalary: number,
  amountEarnings: string[],
  epfEtfCheckedIndex: boolean[]
) => {
  let total =
    (calculateTotalEarningsForEPF(
      basicSalary,
      amountEarnings,
      epfEtfCheckedIndex
    ) *
      8) /
    100;
  return total;
};

export const calculateEmployerEPF = (
  basicSalary: number,
  amountEarnings: string[],
  epfEtfCheckedIndex: boolean[]
) => {
  let total =
    (calculateTotalEarningsForEPF(
      basicSalary,
      amountEarnings,
      epfEtfCheckedIndex
    ) *
      12) /
    100;
  return total;
};

export const calculateEmployerETF = (
  basicSalary: number,
  amountEarnings: string[],
  epfEtfCheckedIndex: boolean[]
) => {
  let total =
    (calculateTotalEarningsForEPF(
      basicSalary,
      amountEarnings,
      epfEtfCheckedIndex
    ) *
      3) /
    100;
  return total;
};

export const calculateCostToCompany = (
  basicSalary: number,
  amountEarnings: string[],
  amountDeduction: string[],
  payDetailsDeduction: string[],
  epfEtfCheckedIndex: boolean[]
) => {
  let total =
    calculateGrossEarnings(
      basicSalary,
      amountEarnings,
      amountDeduction,
      payDetailsDeduction
    ) +
    calculateEmployerEPF(basicSalary, amountEarnings, epfEtfCheckedIndex) +
    calculateEmployerETF(basicSalary, amountEarnings, epfEtfCheckedIndex);
  return total;
};
