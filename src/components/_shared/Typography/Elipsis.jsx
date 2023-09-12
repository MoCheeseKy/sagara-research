import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'antd';
const { Paragraph } = Typography;

export default function Elipsis({ text, ellipsis }) {
  return (
    <Paragraph
      ellipsis={{
        rows: ellipsis,
      }}
    >
      {text}
    </Paragraph>
  );
}

Elipsis.propsTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
};
