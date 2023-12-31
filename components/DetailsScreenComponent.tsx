import { View, Text } from "react-native";
import React from "react";
import ShoppingListComponent from "./ShoppingListComponent";

import tw from "tailwind-react-native-classnames";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopType } from "../App";
import { ParamListBase } from "@react-navigation/native";

type DetailsScreenComponentProps = NativeStackScreenProps<
  ParamListBase,
  "shopDetails"
>;

const DetailsScreenComponent = ({ route }: DetailsScreenComponentProps) => {
  const { shopName, shopAlias } = route.params as ShopType;

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
