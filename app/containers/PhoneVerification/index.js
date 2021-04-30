import React, {memo, useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {useForm, Controller} from 'react-hook-form';
import styled from 'styled-components/native';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacing from '../../components/Spacing';
import RNPickerSelect from 'react-native-picker-select';

// utils
import {useInjectReducer} from '../../utils/injectReducer';
import {useInjectSaga} from '../../utils/injectSaga';

// redux
import {makeSelectRequesting, makeSelectCountries} from './redux/selectors';
import saga from './redux/saga';
import reducer from './redux/reducer';
import {phoneVerification, getCountries} from './redux/actions';

// constants
const key = 'phoneVerification';

const PhoneVerification = ({
  onSubmitForm,
  requesting,
  onGetCountries,
  countries,
}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  useEffect(() => {
    onGetCountries();
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    onSubmitForm(data);
  };

  // states
  const [phoneCode, setPhoneCode] = useState('');

  return (
    <Container>
      <LoginContainer>
        <HeaderText>Please Verify your phone Number!</HeaderText>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          placeholder={{label: 'Select your country', value: null}}
          onValueChange={value => setPhoneCode(value)}
          placeholderTextColor="black"
          style={customPickerStyles}
          items={
            countries &&
            countries.map(item => ({
              label: item.value,
              value: item.key,
            }))
          }
        />
        <Spacing>
          <PhoneNumber>
            <PhoneCode>{phoneCode ? phoneCode : '+00'}</PhoneCode>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  placeholder={'Phone No'}
                  onChangeText={value =>
                    onChange(phoneCode ? phoneCode + value : value)
                  }
                  value={value}
                />
              )}
              name="phone"
              rules={{required: true}}
              defaultValue=""
            />
          </PhoneNumber>
          {errors.phone && <Text>This is required.</Text>}
        </Spacing>
        <Spacing>
          <Button loading={requesting} onPress={handleSubmit(onSubmit)}>
            Continue
          </Button>
        </Spacing>
      </LoginContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
  countries: makeSelectCountries(),
});

export const mapDispatchToProps = dispatch => ({
  onGetCountries: () => dispatch(getCountries()),
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

const PhoneNumber = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const PhoneCode = styled.Text`
  border: 1px solid #ffb6c1;
  border-radius: 10px;
  padding: 14px;
  margin-right: 10px;
  width: 25%;
`;

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#FFB6C1',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#FFB6C1',
    borderRadius: 8,
    color: 'black',
  },
});
