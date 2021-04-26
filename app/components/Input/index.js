import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  border: 1px solid #FFB6C1;
  border-radius: 10px;
  padding-left: 20px;
`;


export default function InputComponent({
  onChangeText,
  placeholder,
}) {
  return (
      <Input 
      onChangeText={onChangeText}
       placeholder={placeholder}
      />
  );
}