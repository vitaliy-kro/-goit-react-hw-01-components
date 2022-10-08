import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.app.basicBackground};
  border: ${p => p.theme.borders.nomral} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const UserStatus = styled.span`
  text-align: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.isOnline ? 'Green' : 'Red')};
`;

export const UserImg = styled.img`
  background-color: #0aa99f;
  border-radius: ${p => p.theme.radii.normal};
`;

export const UserName = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-left: ${p => p.theme.space[3]}px;
`;
