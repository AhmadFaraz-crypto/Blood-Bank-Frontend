import React from 'react';
import styled from 'styled-components/native';

// components
import Button from '../../components/Button';
import Spacing from '../../components/Spacing';

const Home = ({navigation}) => {
  return (
    <Container>
      <HomeContainer>
        <HeaderText>Welcome to our App!</HeaderText>
        <Button onPress={() => navigation.navigate('Login')}>Login</Button>
        <Spacing>
          <Button onPress={() => navigation.navigate('PhoneVerification')}>
            Register
          </Button>
        </Spacing>
      </HomeContainer>
    </Container>
  );
};

export default Home;

// styles
const Container = styled.View`
  background: #f8f8ff;
  height: 100%;
`;

const HomeContainer = styled.View`
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
