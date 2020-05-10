import React from 'react';
import styled from 'styled-components';
import Title from '../../components/title.component';
import Paragraph from '../../components/paragraph.component';

const HomeWrap = styled.div`
  padding: 16px;
`;

const Home = () => (
  <HomeWrap>
    <Title>React SSR Starter</Title>
    <Paragraph>
      Go bonkers! If you&apos;re looking for a simpler React or React-redux starters,
      click on the following links -
      <br />
      <a target="blank" href="https://github.com/thediggu/react-starter">React Starter</a>
      <br />
      <a target="blank" href="https://github.com/thediggu/react-redux-starter">React Redux Starter</a>
    </Paragraph>
  </HomeWrap>
);

export default {
  component: Home,
};
