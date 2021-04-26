import React, {memo} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {useForm, Controller} from 'react-hook-form';
import styled from 'styled-components/native';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacing from '../../components/Spacing';

// utils
import {useInjectReducer} from '../../utils/injectReducer';
import {useInjectSaga} from '../../utils/injectSaga';

// redux
import {makeSelectRequesting} from './redux/selectors';
import saga from './redux/saga';
import reducer from './redux/reducer';
import {phoneVerification} from './redux/actions';

// constants
const key = 'phoneVerification';

const PhoneVerification = ({onSubmitForm, requesting}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    onSubmitForm(data);
  };

  return (
    <Container>
      <LoginContainer>
        <HeaderText>Please Verify your phone Number!</HeaderText>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              placeholder="Phone No"
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="phone"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.phone && <Text>This is required.</Text>}
        <Spacing>
          <Button loading={requesting} onPress={handleSubmit(onSubmit)}>Continue</Button>
        </Spacing>
      </LoginContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitForm: data => dispatch(phoneVerification(data)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(PhoneVerification);

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
