import styled from 'styled-components';

export const ParamName = styled.th`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.app.tableHead};
  color: ${p => p.theme.colors.app.basicBackground};
`;

export const TransactionLine = styled.tr`
  :not(:nth-child(even)) {
    background-color: ${p => p.theme.colors.app.basicBackground};
  }
`;

export const TransactionParam = styled.th`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
