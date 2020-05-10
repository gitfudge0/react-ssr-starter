import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ParaWrap = styled.div`
  font-size: 14px;
`;

const Paragraph = ({ children }) => (
  <ParaWrap>
    <pre>{ children }</pre>
  </ParaWrap>
);

Paragraph.propTypes = {
  children: propTypes.arrayOf(propTypes.oneOfType([
    propTypes.elementType,
    propTypes.object,
  ])).isRequired,
};

export default Paragraph;
