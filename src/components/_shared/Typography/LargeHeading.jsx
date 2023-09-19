import PropTypes from 'prop-types';
import React from 'react';

export default function LargeHeading({
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
      className={`text-xl md:text-2xl lg:text-3xl ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

LargeHeading.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
