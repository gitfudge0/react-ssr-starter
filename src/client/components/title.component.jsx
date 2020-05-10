import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TitleWrap = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 16px;
`;

const Title = ({ children }) => (
  <TitleWrap>{ children }</TitleWrap>
);

Title.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
};

export default Title;
