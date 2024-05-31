/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../Styles.css";
import Addassets from "../assets/add.png";
import Closeassets from "../assets/close.png";
import Resetassets from "../assets/reset.png";
import CheckBox from "./CheckBox";
import InputField from "./InputField";
import LabelField from "./LabelField";
import ReceiptCard from "./ReceiptCard";

const CalculatorCard = () => {
  const [earningsCols, setEarningsCols] = useState([1]);
  const [deductionCols, setDeductionCols] = useState([1]);
  const [basicSalary, setBasicSalary] = useState(0);
  const [payDetailsEarnings, setPayDetailsEarnings] = useState([""]);
  const [amountEarnings, setAmountEarnings] = useState([""]);
  const [payDetailsDeduction, setPayDetailsDeduction] = useState([""]);
  const [amountDeduction, setAmountDeduction] = useState([""]);
  const [epfEtfCheckedIndex, setEpfEtfCheckedIndex] = useState([false]);

  const handleAddEarningsCol = () => {
    setEarningsCols([...earningsCols, earningsCols.length + 1]);
  };

  const handleAddDeductionCol = () => {
    setDeductionCols([...deductionCols, deductionCols.length + 1]);
  };

  const handleRemoveEarningsCol = (indexToRemove: number) => {
    setEarningsCols(earningsCols.filter((_, index) => index !== indexToRemove));
  };

  const handleRemoveDeductionCol = (indexToRemove: number) => {
    setDeductionCols(
      deductionCols.filter((_, index) => index !== indexToRemove)
    );
  };

  const basic_Salary = () => {
    let bSalary = basicSalary;
    return bSalary;
  };

  const calculateTotalEarnings = () => {
    let total = basicSalary;
    amountEarnings.forEach((value) => {
      if (value) {
        total += parseInt(value);
      }
    });
    return total;
  };

  const calculateTotalEarningsForEPF = () => {
    let total = basicSalary;
    amountEarnings.forEach((value, index) => {
      if (value && epfEtfCheckedIndex[index]) {
        total += parseInt(value);
      }
    });
    return total;
  };

  const calculateGrossDeduction = () => {
    let grossDeduction = 0;
    amountDeduction.forEach((value, index) => {
      if (value && payDetailsDeduction[index]) {
        grossDeduction += parseInt(value);
      }
    });
    return grossDeduction;
  };

  const calculateGrossEarnings = () => {
    let totalGrossEarnings =
      calculateTotalEarnings() - calculateGrossDeduction();
    return totalGrossEarnings;
  };

  const calculateGrossSalaryForEPF = () => {
    let total = calculateTotalEarningsForEPF() - calculateGrossDeduction();
    return total;
  };

  const calculateEmployeeEPF = () => {
    let total = (calculateTotalEarningsForEPF() * 8) / 100;
    return total;
  };

  const calculateEmployerEPF = () => {
    let total = (calculateTotalEarningsForEPF() * 12) / 100;
    return total;
  };

  const calculateEmployerETF = () => {
    let total = (calculateTotalEarningsForEPF() * 3) / 100;
    return total;
  };

  const calculateAPIT = () => {
    let grossEarnings = calculateGrossEarnings();
    let total;

    if (grossEarnings === 100000) {
      total = grossEarnings;
    } else if (grossEarnings > 100000 && grossEarnings < 141667) {
      total = grossEarnings * 0.6 - 6000;
    } else if (grossEarnings > 141667 && grossEarnings < 183333) {
      total = grossEarnings * 0.12 - 14500;
    } else if (grossEarnings > 183333 && grossEarnings < 225000) {
      total = grossEarnings * 0.18 - 25000;
    } else if (grossEarnings > 225000 && grossEarnings < 266667) {
      total = grossEarnings * 0.24 - 39000;
    } else if (grossEarnings > 266667 && grossEarnings < 308333) {
      total = grossEarnings * 0.3 - 55000;
    } else if (grossEarnings > 308333) {
      total = grossEarnings * 0.36 - 73500;
    } else {
      total = 0;
    }

    return total;
  };

  const calculateNetSalary = () => {
    let total =
      calculateGrossEarnings() - calculateEmployeeEPF() - calculateAPIT();
    return total;
  };

  const calculateCostToCompany = () => {
    let total =
      calculateGrossEarnings() +
      calculateEmployerEPF() +
      calculateEmployerETF();
    return total;
  };

  const handleResetField = () => {
    setBasicSalary(0);
    setPayDetailsEarnings([""]);
    setAmountEarnings([""]);
    setPayDetailsDeduction([""]);
    setAmountDeduction([""]);
    setEarningsCols([1]);
    setDeductionCols([1]);
  };

  const handleBasicSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBasicSalary(value);
  };

  useEffect(() => {
    basic_Salary();
    calculateTotalEarnings();
    calculateTotalEarningsForEPF();
    calculateGrossDeduction();
    calculateGrossEarnings();
    calculateGrossSalaryForEPF();
    calculateEmployeeEPF();
    calculateEmployerEPF();
    calculateEmployerETF();
    calculateCostToCompany();
    calculateAPIT();
    calculateNetSalary();
  }, [
    basicSalary,
    amountEarnings,
    payDetailsEarnings,
    amountDeduction,
    payDetailsDeduction,
    epfEtfCheckedIndex,
  ]);

  return (
    <div className="row mt-5 main-div">
      <div className="col-md-1 side-col" />
      <div className="main-cal col-md-6 md:col-auto sm:col-auto">
        <div className="calculator-card border rounded-2 m-4 p-4 text-bg-light text-start">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "40px" }}
          >
            <h3 className="fw-bold">Calculate Your Salary</h3>
            <button
              className="border-0 bg-transparent text-primary my-4 d-flex align-items-center justify-content-center"
              onClick={handleResetField}
            >
              <img
                src={Resetassets}
                alt="Reset"
                style={{ marginRight: "10px" }}
              />{" "}
              Reset
            </button>
          </div>

          <div className="basic_salary_col mt-4">
            <LabelField label="Basic Salary" />
            <InputField
              className="input_field border rounded-1 px-2"
              type="text"
              placeholder="Basic Salary"
              value={basicSalary}
              onChange={handleBasicSalaryChange}
            />
          </div>

          <div className="earnings_col mt-4">
            <LabelField
              label="Earnings"
              subtext="Allowance, Fixed Allowance, Bonus and etc."
            />
            {earningsCols.map((index) => (
              <div
                key={index}
                className="main-earningsCols align-items-center mt-2"
              >
                <div className="d-flex gap-2 common_row">
                  <InputField
                    className="input_field_type border rounded-1 px-2"
                    type="text"
                    placeholder="Pay Details (Title)"
                    value={payDetailsEarnings[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newPayDetailsEarnings = [...payDetailsEarnings];
                      newPayDetailsEarnings[index - 1] = e.target.value;
                      setPayDetailsEarnings(newPayDetailsEarnings);
                    }}
                  />
                  <InputField
                    className="input_field_amount border rounded-1 px-3 text-end"
                    type="text"
                    placeholder="Amount"
                    value={
                      amountEarnings[index - 1]
                        ? parseFloat(amountEarnings[index - 1]).toLocaleString()
                        : ""
                    }
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newAmountEarnings = [...amountEarnings];
                      newAmountEarnings[index - 1] = e.target.value.replace(
                        /,/g,
                        ""
                      );
                      setAmountEarnings(newAmountEarnings);
                    }}
                    onKeyPress={(event: React.KeyboardEvent) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="d-flex">
                  <button
                    className="btn close_btn border-0 bg-secondary-subtle rounded-circle mx-2 d-flex justify-content-center align-items-center"
                    onClick={() => handleRemoveEarningsCol(index - 1)}
                  >
                    <img src={Closeassets} alt="Close" />
                  </button>
                  <CheckBox
                    className="m-2 form-check-input"
                    label={"EPF/ETF"}
                    checked={epfEtfCheckedIndex[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newEpfEtf = [...epfEtfCheckedIndex];
                      newEpfEtf[index - 1] = !epfEtfCheckedIndex[index - 1];
                      setEpfEtfCheckedIndex(newEpfEtf);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="border-0 bg-transparent text-primary my-4 d-flex align-items-center justify-content-center"
            onClick={handleAddEarningsCol}
          >
            <img className="w-24px h-24px" src={Addassets} alt="Add" />{" "}
            <strong
              style={{
                color: "#0052EA",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Add New Allowance
            </strong>
          </button>

          <hr></hr>

          <div className="deduction_col mt-4">
            <LabelField
              label="Deductions"
              subtext="Salary Advances, Loan Deductions and all"
            />
            {deductionCols.map((index) => (
              <div
                key={index}
                className="main-earningsCols align-items-center mt-2"
              >
                <div className="d-flex gap-2 common_row">
                  <InputField
                    className="input_field_type border rounded-1 px-2"
                    type="text"
                    placeholder="Pay Details (Title)"
                    value={payDetailsDeduction[index - 1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newPayDetailsDeduction = [...payDetailsDeduction];
                      newPayDetailsDeduction[index - 1] = e.target.value;
                      setPayDetailsDeduction(newPayDetailsDeduction);
                    }}
                  />
                  <InputField
                    className="input_field_amount border rounded-1 px-3 text-end"
                    type="text"
                    placeholder="Amount"
                    value={
                      amountDeduction[index - 1]
                        ? parseFloat(
                            amountDeduction[index - 1]
                          ).toLocaleString()
                        : ""
                    }
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newAmountDeduction = [...amountDeduction];
                      newAmountDeduction[index - 1] = e.target.value.replace(
                        /,/g,
                        ""
                      );
                      setAmountDeduction(newAmountDeduction);
                    }}
                    onKeyPress={(event: React.KeyboardEvent) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <button
                  className="btn close_btn border-0 bg-secondary-subtle rounded-circle mx-2 d-flex justify-content-center align-items-center w-4"
                  onClick={() => handleRemoveDeductionCol(index - 1)}
                >
                  <img src={Closeassets} alt="Close" />
                </button>
              </div>
            ))}

            <button
              className="border-0 bg-transparent text-primary my-4 d-flex align-items-center justify-content-center"
              onClick={handleAddDeductionCol}
            >
              <img className="w-24px h-24px" src={Addassets} alt="Add" />{" "}
              <strong
                style={{
                  color: "#0052EA",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Add New Allowance
              </strong>
            </button>
          </div>
        </div>
      </div>

      <div className="main-sum col-md-4 md:col-auto sm:col-auto">
        <ReceiptCard
          basicSalary={basicSalary}
          grossEarning={calculateGrossEarnings()}
          grossDeduction={calculateGrossDeduction()}
          employeeEPF={calculateEmployeeEPF()}
          APIT={calculateAPIT()}
          netSalary={calculateNetSalary()}
          employerEPF={calculateEmployerEPF()}
          employerETF={calculateEmployerETF()}
          CTC={calculateCostToCompany()}
        />
        <div className="col-md-1"></div>
      </div>
      <div className="col-md-1 side-col" />
    </div>
  );
};

export default CalculatorCard;
