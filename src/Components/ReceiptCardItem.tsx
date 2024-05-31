import React from 'react';

interface ReceiptCardItemProps {
  className?: string;
  label?: string
  amount?: string
  [key: string]: any;
}

const ReceiptCardItem: React.FC<ReceiptCardItemProps> = ({className,label,amount}) => {
  return (
    <div className="d-flex justify-content-between">
      <p className={className}>{label}</p>
      <p className={className}>{amount}</p>
    </div>
  );
};

export default ReceiptCardItem;