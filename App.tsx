import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreenComponent from "./components/DetailsScreenComponent";

type ShopType = { shopName: string; shopAlias: string };

export type StackNavigatorType = {
  shopDetails: ShopType;
};

function HomeScreen({ navigation }) {
  const navigateToDetails = ({ shopAlias, shopName }: ShopType) => {
    navigation.navigate("shopDetails", { shopAlias, shopName });
  };

  const shopDefinitions: ShopType[] = [
    { shopAlias: "tesco", shopName: "Tesco" },
    { shopAlias: "penny", shopName: "Penny" },
    { shopAlias: "lidl", shopName: "Lidl" },
    { shopAlias: "kik", shopName: "Kik" },
    { shopAlias: "euroFamily", shopName: "Euro Family" },
    { shopAlias: "interspar", shopName: "Interspar" },
    { shopAlias: "dm", shopName: "DM" },
    { shopAlias: "kínai", shopName: "Kínai" },
    { shopAlias: "rossmann", shopName: "Rossmann" },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8ED1FC",
      }}
    >
      {shopDefinitions.map(({ shopAlias, shopName }) => (
        <View
          key={shopAlias}
          style={{
            alignContent: "space-around",
            padding: 12,
            backgroundColor: "#8ED1FC",
            borderRadius: 80,
            width: "70%",
          }}
        >
          <Button
            title={shopName}
            onPress={() => navigateToDetails({ shopAlias, shopName })}
          />
        </View>
      ))}
    </View>
  );
}

const Stack = createNativeStackNavigator();

const globalScreeOptions = {
  headerStyle: { backgroundColor: "#2196f3" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={globalScreeOptions}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Bevásárlólisták" }}
        />
        <Stack.Screen
          name="shopDetails"
          component={DetailsScreenComponent} //typescriptes basic react navigation tutorialból kicsekkolni
          options={{ title: "Vissza" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
