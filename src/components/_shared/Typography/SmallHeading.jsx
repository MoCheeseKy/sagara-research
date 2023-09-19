import PropTypes from 'prop-types';
import React from 'react';

export default function SmallHeading({
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
      className={`text-lg md:text-xl ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

SmallHeading.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
