import styled from 'styled-components';

export const Avatar = styled.img`
  background-color: ${p => p.theme.colors.basicBackground};
  width: 100px;
  margin-bottom: ${p => p.theme.space[3]}px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserDescr = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const StatsItemLabel = styled.span`
  display: block;
  font-weight: ${props => {
    return props.eventType === 'label' ? '400' : '700';
  }};
`;
