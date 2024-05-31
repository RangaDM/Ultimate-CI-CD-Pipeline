import React from "react";
import "../Styles.css";
import ReceiptCardItem from "./ReceiptCardItem";

interface ReceiptCardProps {
  basicSalary: number;
  grossEarning: number;
  grossDeduction: number;
  employeeEPF: number;
  APIT: number;
  netSalary: number;
  employerEPF: number;
  employerETF: number;
  CTC: number;
}

const ReceiptCard: React.FC<ReceiptCardProps> = ({
  basicSalary,
  grossEarning,
  grossDeduction,
  employeeEPF,
  APIT,
  netSalary,
  employerEPF,
  employerETF,
  CTC,
}) => {
  return (
    <div>
      <div className="receipt-card border rounded-2 m-4 p-4 bg-white text-start">
        <div className="d-flex justify-content-between mt-2">
          <h3 className="fw-bold">Your Salary</h3>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <p className="fw-semibold text-secondary">Items</p>
          <p className="fw-semibold text-secondary">Amount</p>
        </div>

        <ReceiptCardItem
          label="Basic Salary"
          amount={parseFloat(basicSalary.toFixed(2)).toLocaleString()}
        />
        <ReceiptCardItem
          label="Gross Earning"
          amount={parseFloat(grossEarning.toFixed(2)).toLocaleString()}
        />
        <ReceiptCardItem
          label="Gross Deduction"
          amount={
            grossDeduction !== 0
              ? `-${parseFloat(grossDeduction.toFixed(2)).toLocaleString()}`
              : parseFloat(grossDeduction.toFixed(2)).toLocaleString()
          }
        />
        <ReceiptCardItem
          label="Employee EPF (8%)"
          amount={
            employeeEPF !== 0
              ? `-${parseFloat(employeeEPF.toFixed(2)).toLocaleString()}`
              : parseFloat(employeeEPF.toFixed(2)).toLocaleString()
          }
        />
        <ReceiptCardItem
          label="APIT"
          amount={
            APIT !== 0
              ? `-${parseFloat(APIT.toFixed(2)).toLocaleString()}`
              : parseFloat(APIT.toFixed(2)).toLocaleString()
          }
        />
        <div
          className="net_salary border border-1 p-3 my-3"
          style={{ borderRadius: "4px" }}
        >
          <ReceiptCardItem
            className="my-auto fw-semibold"
            label="Net Salary (Take Home)"
            amount={parseFloat(netSalary.toFixed(2)).toLocaleString()}
          />
        </div>

        <p className="fw-semibold text-secondary mt-4">
          Contribution from the Employer
        </p>

        <ReceiptCardItem
          label="Employer EPF (12%)"
          amount={parseFloat(employerEPF.toFixed(2)).toLocaleString()}
        />
        <ReceiptCardItem
          label="Employer ETF (3%)"
          amount={parseFloat(employerETF.toFixed(2)).toLocaleString()}
        />
        <ReceiptCardItem
          className="mt-4"
          label="CTC (Cost to Company)"
          amount={parseFloat(CTC.toFixed(2)).toLocaleString()}
        />
      </div>
    </div>
  );
};

export default ReceiptCard;
