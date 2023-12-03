import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingList from './ShoppingList';
import ShoppingList2 from './ShoppingList2';
import ShoppingList3 from './ShoppingList3';
import ShoppingList4 from './ShoppingList4';
import ShoppingList5 from './ShoppingList5';
import ShoppingList6 from './ShoppingList6';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Button 
        title="Tesco"
        onPress={() => navigation.navigate('Vissza a Tesco-ból')}
      />
      <Text> </Text>
      <Button
        title="Penny"
        onPress={() => navigation.navigate('Vissza a Penny-ből')}
      />
      <Text> </Text>
      <Button
        title="Lidl"
        onPress={() => navigation.navigate('Vissza a Lidl-ből')}
      />
      <Text> </Text>
      <Button
        title="Kik"
        onPress={() => navigation.navigate('Vissza a Kik-ből')}
      />
      <Text> </Text>
      <Button
        title="Euro Family"
        onPress={() => navigation.navigate('Vissza az Euro Family-ból')}
      />
      <Text> </Text>
      <Button
        title="Interspar"
        onPress={() => navigation.navigate('Vissza az Interspar-ból')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
    
      <Text>Tesco</Text>
        <View>
          <ShoppingList />
        </View>
    </View>
  );
}

function DetailsScreen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Text>Penny</Text>
      <View>
          <ShoppingList2 />
        </View> 
    </View>
  );
}

function DetailsScreen3() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Text>Lidl</Text>
      <View>
          <ShoppingList3 />
        </View>
    </View>
  );
}

function DetailsScreen4() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Text>Kik</Text>
      <View>
          <ShoppingList4 />
        </View>
    </View>
  );
}

function DetailsScreen5() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Text>Euro family</Text>
      <View>
          <ShoppingList5 />
        </View>
    </View>
  );
}

function DetailsScreen6() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Text>Interspar</Text>
      <View>
          <ShoppingList6 />
        </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const globalScreeOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={globalScreeOptions}>
        <Stack.Screen name="Bevásárlólisták" component={HomeScreen} />
        <Stack.Screen name="Vissza a Tesco-ból" component={DetailsScreen} />
        <Stack.Screen name="Vissza a Penny-ből" component={DetailsScreen2} />
        <Stack.Screen name="Vissza a Lidl-ből" component={DetailsScreen3} />
        <Stack.Screen name="Vissza a Kik-ből" component={DetailsScreen4} />
        <Stack.Screen name="Vissza az Euro Family-ból" component={DetailsScreen5} />
        <Stack.Screen name="Vissza az Interspar-ból" component={DetailsScreen6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;