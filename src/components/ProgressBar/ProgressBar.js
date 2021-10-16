/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BaseBackground = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  position: relative;
`;

const SmallBackground = styled(BaseBackground)`
  border-radius: 4px;
  height: 0.5rem;
`;

const MediumBackground = styled(BaseBackground)`
  border-radius: 4px;
  height: 0.75rem;
`;

const LargeBackground = styled(BaseBackground)`
  border-radius: 8px;
  height: 1.5rem;
`;

const backgrounds = {
  small: SmallBackground,
  medium: MediumBackground,
  large: LargeBackground,
}

const Indicator = styled.div`
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${props => getIndicatorRightRadius(props.value)}px;
  border-bottom-right-radius: ${props => getIndicatorRightRadius(props.value)}px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.value}%;

  ${SmallBackground} & {
    height: 0.5rem;
  }

  ${MediumBackground} & {
    height: 0.75rem;
  }

  ${LargeBackground} & {
    height: 1rem;
    margin: 0.25rem;

    // Because of the extra margin on this variant, we need to make sure we never exceed full width
    // minus that margin.
    max-width: calc(100% - 0.5rem);
  }
`;

function getIndicatorRightRadius(value) {
  switch (value) {
    case 100: return 4;
    case 99: return 3;
    case 98: return 2;
    case 97: return 1;
    default: return 0;
  }
}

const ProgressBar = ({ value, size }) => {
  const Background = backgrounds[size] || SmallBackground;
  const parsedValue = Math.max(
    Math.min(
      Number(value) || 0,
      100,
    ),
    0,
  );

  return (
    <>
      <VisuallyHidden>{value} out of 100</VisuallyHidden>
      <Background>
        <Indicator value={parsedValue} />
      </Background>
    </>
  );
};

export default ProgressBar;
