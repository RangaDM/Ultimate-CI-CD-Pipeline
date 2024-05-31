import React from "react";

interface CheckBoxProps {
  className?: string;
  label: string;
  checked?: boolean;
  [key: string]: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  className,
  checked,
  ...rest
}) => {
  return (
    <div className="d-flex align-items-center">
      <input
        className={className}
        type="checkbox"
        value=""
        id="flexCheckDefault"
        checked={checked}
        {...rest}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
