import PropTypes from 'prop-types';
import React from 'react';

export default function MediumHeading({
  text,
  className,
  bold,
  semibold,
  medium,
}) {
  return (
    <p
      className={`text-xl md:text-2xl ${bold ? 'font-bold' : ''} ${
        semibold ? 'font-semibold' : ''
      } ${medium ? 'font-medium' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

MediumHeading.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
