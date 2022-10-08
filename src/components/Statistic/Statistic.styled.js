import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.heading};
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Item = styled.li`
  width: 20%;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${props => {
    switch (props.label) {
      case '.docx':
        return props.theme.colors.app.docxBg;
      case '.pdf':
        return props.theme.colors.app.pdfBg;
      case '.mp3':
        return props.theme.colors.app.mp3Bg;
      case '.psd':
        return props.theme.colors.app.psdBg;

      default:
        return props.theme.colors.app.basicBackground;
    }
  }};
`;

export const Label = styled.span`
  display: block;
  text-align: center;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => {
    return +p.elementType ? p.theme.fontSizes.m : p.theme.fontSizes.s;
  }};

  color: ${p => p.theme.colors.app.basicBackground};
`;
