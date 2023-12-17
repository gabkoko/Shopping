import { View, Text } from "react-native";
import React from "react";
import ShoppingListComponent from "./ShoppingListComponent";

import tw from "tailwind-react-native-classnames";

const DetailsScreenComponent = ({ route }) => {
  const { shopName, shopAlias } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
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
