import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

function CustomSelect({ className, options, value, ...props }) {
  return (
    <Select
      className={`custom-input rounded ${className} `}
      value={value}
      options={options}
      {...props}
    />
  );
}

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CustomSelect;
