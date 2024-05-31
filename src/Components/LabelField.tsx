import React from "react";

interface LabelProps {
  label: string;
  subtext?: string;
  [key: string]: any;
}

const LabelField: React.FC<LabelProps> = ({ label, subtext }) => {
  return (
    <div className="d-flex flex-column my-2">
      <label className="input_label fw-semibold">{label}</label>
      {subtext && <small className="form-text text-muted">{subtext}</small>}
    </div>
  );
};

export default LabelField;
