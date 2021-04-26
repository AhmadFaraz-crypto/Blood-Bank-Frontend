import React from 'react';
import styled from 'styled-components/native';

// components
import {ActivityIndicator} from 'react-native';

const variantsBg = {
  primary: '#FFB6C1',
};

const variantColors = {
  primary: '#fff',
};

const fontSizes = {
  rg: '22px',
};

const lineHeights = {
  rg: '27px',
};

const paddings = {
  rg: '16px 30px',
};

const Button = styled.TouchableOpacity`
  color: ${props => variantColors[props.variant]};
  background-color: ${props => variantsBg[props.variant]};
  font-size: ${props => fontSizes[props.size]};
  line-height: ${props => lineHeights[props.size]};
  padding: ${props => paddings[props.size]};
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export default function ButtonComponent({
  text,
  icon,
  center,
  variant = 'primary',
  size = 'rg',
  disabled,
  onPress,
  loading,
  children,
}) {
  return (
    <Button
      center={center}
      variant={variant}
      size={size}
      icon={Boolean(icon)}
      disabled={disabled || loading}
      loading={loading}
      onPress={() => onPress && onPress()}>
      <ButtonText>
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
        {!loading && icon && icon}
        {children && !loading && children}
        {text && !loading && text}
      </ButtonText>
    </Button>
  );
}
