import React from 'react';
import logo from '../../assets/images/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={logo} alt="Logo GitCompare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
