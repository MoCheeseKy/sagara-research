import { Input, InputNumber } from 'antd';
import React from 'react';

const CustomInput = ({
  value,
  placeholder,
  className,
  type,
  prefix,
  controls,
  justNumber,
  ...props
}) => {
  return (
    <>
      {justNumber ? (
        <>
          <InputNumber
            placeholder={placeholder}
            type={type}
            value={value}
            className={`custom-input rounded ${className} `}
            controls={controls}
            {...props}
          />
        </>
      ) : (
        <>
          <Input
            placeholder={placeholder}
            type={type}
            value={value}
            prefix={prefix}
            size='small'
            className={`custom-input rounded ${className} `}
            {...props}
          />
        </>
      )}
    </>
  );
};

export default CustomInput;
