import PropTypes from 'prop-types';
import React from 'react';

export default function LargeText({ text, className, bold, semibold, medium }) {
  return (
    <p
      className={`text-base md:text-lg ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

LargeText.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
