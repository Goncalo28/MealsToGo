import styled from "styled-components/native";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.space[3]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.body};
  color: ${(props: any) => props.theme.colors.ui.primary};
  font-size: ${(props: any) => props.theme.fontSizes.body};
`;

const Rating = styled.View`
  flex-direction: row;
  flex: 1;
`;

const RowContainer = styled.View`
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
  flex-direction: row;
`;

const OpenSvg = styled(SvgXml)`
  margin-horizontal: ${(props: any) => props.theme.space[3]};
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export {
  Icon,
  OpenSvg,
  RowContainer,
  Rating,
  Address,
  Info,
  RestaurantCardCover,
  RestaurantCard,
};
