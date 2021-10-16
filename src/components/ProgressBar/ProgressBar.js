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
  padding: 4px;
`;

const backgrounds = {
  small: SmallBackground,
  medium: MediumBackground,
  large: LargeBackground,
}

const Indicator = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width, 0);

  ${SmallBackground} & {
    height: 0.5rem;
  }

  ${MediumBackground} & {
    height: 0.75rem;
  }

  ${LargeBackground} & {
    height: 1rem;
  }
`;

const OverflowWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = ({ value, size }) => {
  const Background = backgrounds[size] || SmallBackground;
  return (
    <>
      <VisuallyHidden>{value} out of 100</VisuallyHidden>
      <Background>
        <OverflowWrapper>
          <Indicator style={{ '--width': value + '%' }} />
        </OverflowWrapper>
      </Background>
    </>
  );
};

export default ProgressBar;
