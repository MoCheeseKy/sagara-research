import PropTypes from 'prop-types';
import React from 'react';

export default function SmallText({
  text,
  className,
  bold,
  semibold,
  medium,
  ...props
}) {
  return (
    <p
      {...props}
      className={`text-sm ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

SmallText.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
