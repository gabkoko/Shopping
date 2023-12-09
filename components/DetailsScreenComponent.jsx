import { View, Text } from "react-native";
import React from "react";
import ShoppingListComponent from "./ShoppingListComponent";

const DetailsScreenComponent = ({ route }) => {
  const { shopName, shopAlias } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <Text>{shopName}</Text>
      <View>
        <ShoppingListComponent shopAlias={shopAlias} />
      </View>
    </View>
  );
};
export default DetailsScreenComponent;
