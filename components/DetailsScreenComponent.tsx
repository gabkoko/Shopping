import { View, Text } from "react-native";
import React from "react";
import ShoppingListComponent from "./ShoppingListComponent";

import tw from "tailwind-react-native-classnames";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigatorType } from "../App";

type DetailsScreenComponentProps = NativeStackScreenProps<
  StackNavigatorType,
  "shopDetails"
>;

{
  /* HF1: ts hiba eltüntetése */
}
//typescriptes basic react navigation tutorialból kicsekkolni
//DetailsScreenComponent: Type????
const DetailsScreenComponent = ({ route }: DetailsScreenComponentProps) => {
  const { shopName, shopAlias } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#8ED1FC",
      }}
    >
      <Text style={tw`text-white text-xl`}>{shopName}</Text>
      <View>
        <ShoppingListComponent shopAlias={shopAlias} />
      </View>
    </View>
  );
};

export default DetailsScreenComponent;
