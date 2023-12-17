import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type DetailsScreenComponentProps = {
  shopAlias: string;
};

const ShoppingListComponent = ({ shopAlias }: DetailsScreenComponentProps) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    // Betöltjük az adatokat az AsyncStorage-ból, amikor a komponens mount-olódik
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem(shopAlias);
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Hiba az adatok betöltésekor:", error);
    }
  };

  const saveItems = async () => {
    try {
      await AsyncStorage.setItem(shopAlias, JSON.stringify(items));
    } catch (error) {
      console.error("Hiba az adatok mentésekor:", error);
    }
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  useEffect(() => {
    // Mentjük az adatokat az AsyncStorage-be, amikor a 'items' változik
    saveItems();
  }, [items]);

  return (
    <View style={styles.container}>
      <Text style={tw`text-white text-lg`}>Bevásárlólista</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Új elem"
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
        <Button title="Hozzáad" onPress={handleAddItem} />
      </View>

      <FlatList
        style={styles.listContainer}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <Button title="Töröl" onPress={() => handleRemoveItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#8ED1FC",
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    width: "100%",
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#2196f3",
    marginRight: 8,
    padding: 5,
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2196f3",
    padding: 4,
    marginVertical: 1,
    textDecorationColor: "#2C6BED",
    width: "65%",
    Height: "100%",
  },
});

export default ShoppingListComponent;
