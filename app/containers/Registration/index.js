import React from 'react';
import styled from 'styled-components/native';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacing from '../../components/Spacing';

const Registration = () => {
  return (
    <Container>
      <LoginContainer>
        <HeaderText>Welcome to Registeration!</HeaderText>
        <Input placeholder="Password" />
        <Spacing>
          <Input placeholder="Select your country" />
        </Spacing>
        <Spacing>
          <Button>Register</Button>
        </Spacing>
      </LoginContainer>
    </Container>
  );
};

export default Registration;

// styles
const Container = styled.View`
  background: #f8f8ff;
  height: 100%;
`;

const LoginContainer = styled.View`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0 10%;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
`;
