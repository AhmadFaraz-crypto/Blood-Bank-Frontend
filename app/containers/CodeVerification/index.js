import React, {memo, useState} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styled from 'styled-components/native';

// components
import Button from '../../components/Button';
import Spacing from '../../components/Spacing';

// utils
import {useInjectReducer} from '../../utils/injectReducer';
import {useInjectSaga} from '../../utils/injectSaga';

// redux
import {makeSelectRequesting} from './redux/selectors';
import saga from './redux/saga';
import reducer from './redux/reducer';
import {codeVerification} from './redux/actions';

// constants
const key = 'codeVerification';

const CodeVerification = ({onSubmitCode, requesting}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  // states
  const [code, setCode] = useState();

  return (
    <Container>
      <LoginContainer>
        <HeaderText>Enter the Verification Code!</HeaderText>
        <OTPInputView
          style={{width: '100%', height: 100}}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          pinCount={4}
          onCodeChanged={e => setCode(e)}
        />
        <Spacing>
          <Button loading={requesting} onPress={onSubmitCode(code)}>
            Register
          </Button>
        </Spacing>
      </LoginContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitCode: data => dispatch(codeVerification(data)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CodeVerification);

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

const styles = StyleSheet.create({
  borderStyleHighLighted: {
    borderColor: '#FFB6C1',
  },

  underlineStyleBase: {
    color: '#000000',
  },

  underlineStyleHighLighted: {
    borderColor: '#FFB6C1',
  },
});
