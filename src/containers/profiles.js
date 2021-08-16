import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import Header from '../components/header/header.component';

const SelectProfileContainer = ({user , setProfile}) => {
  return (
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
      </Header.Frame>
    </Header>
  )
}

export default SelectProfileContainer;
