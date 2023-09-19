import PropTypes from 'prop-types';
import React from 'react';

export default function ExtraLargeHeading({
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
      className={`text-2xl md:text-3xl lg:text-4xl ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

ExtraLargeHeading.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
