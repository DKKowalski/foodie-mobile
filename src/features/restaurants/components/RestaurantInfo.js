import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
// import { styled as nwStyled } from "nativewind";
import { Card } from "react-native-paper";
import { SvgUri, SvgXml } from "react-native-svg";
import lodging from "../../../../assets/lodging";
import restaurantIcon from "../../../../assets/restaurant-icon";
import star from "./../../../../assets/star";
import open from "./../../../../assets/open";
import Favorites from "../../../ui/Favorites";
function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Kempini",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = true,
  } = restaurant;

  const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    background-color: ${(props) => props.theme.colors.bg.primary};
    font-size: ${(props) => props.theme.fontSizes.title};
  `;

  const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;
  const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
  `;

  const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
    flex: 0.5;
  `;

  const Section = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const SectionEnd = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    gap: 20px;
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};

    color: ${(props) => props.theme.colors.ui.primary};
  `;

  const CloseTemp = styled.Text`
    text-transform: uppercase;
    flex: 0.7;
    color: ${(props) => props.theme.colors.ui.error};
  `;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favorites restaurant={restaurant}/>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <CloseTemp>Closed temporarily</CloseTemp>}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View>
              <SvgXml
                width={20}
                height={20}
                xml={icon == "lodging" ? lodging : restaurantIcon}
              />
            </View>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Card.Content>
    </RestaurantCard>
  );
}

export default RestaurantInfo;
