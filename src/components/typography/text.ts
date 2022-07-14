import styled from "styled-components/native";

const defaultTextStyles = (theme: any) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: { fontSizes: { body: any } }) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: { fontSizes: { body: any } }) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: { colors: { text: { error: any } } }) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: {
  fontSizes: { caption: any };
  fontWeights: string;
}) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: {
  fonts: { heading: any };
  fontSizes: { body: any };
  fontWeights: { medium: any };
}) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants: any = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text: any = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }: any) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
