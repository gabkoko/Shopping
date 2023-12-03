import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingList from './ShoppingList';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text> </Text>
      <Button 
        title="Tesco"
        onPress={() => navigation.navigate('Vissza')}
      />
      <Text> </Text>
      <Button
        title="Penny"
        onPress={() => navigation.navigate('Vissza2')}
      />
      <Text> </Text>
      <Button
        title="Lidl"
        onPress={() => navigation.navigate('Vissza3')}
      />
      <Text> </Text>
      <Button
        title="Kik"
        onPress={() => navigation.navigate('Vissza4')}
      />
      <Text> </Text>
      <Button
        title="Euro Family"
        onPress={() => navigation.navigate('Vissza5')}
      />
      <Text> </Text>
      <Button
        title="Interspar"
        onPress={() => navigation.navigate('Vissza6')}
      />

    </View>
  );
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

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
          <ShoppingList />
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
          <ShoppingList />
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
          <ShoppingList />
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
          <ShoppingList />
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
          <ShoppingList />
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
        <Stack.Screen name="Vissza" component={DetailsScreen} />
        <Stack.Screen name="Vissza2" component={DetailsScreen2} />
        <Stack.Screen name="Vissza3" component={DetailsScreen3} />
        <Stack.Screen name="Vissza4" component={DetailsScreen4} />
        <Stack.Screen name="Vissza5" component={DetailsScreen5} />
        <Stack.Screen name="Vissza6" component={DetailsScreen6} />
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