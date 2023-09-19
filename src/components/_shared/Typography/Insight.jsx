import PropTypes from 'prop-types';
import React from 'react';

export default function Insight({
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
      className={`text-3xl md:text-4xl lg:text-5xl ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

Insight.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
