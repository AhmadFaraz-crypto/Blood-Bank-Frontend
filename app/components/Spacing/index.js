import React from 'react';
import styled from 'styled-components/native';

const paddings = {
  rg: '0px 0px',
};

const margins = {
  rg: '20px 0px 0px 0px',
};

const Spacing = styled.View`
  padding: ${props => paddings[props.size]};
  margin: ${props => margins[props.size]};
`;

export default function SpacingComponent({size = 'rg', children}) {
  return <Spacing size={size}>{children}</Spacing>;
}
