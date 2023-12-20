import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ShoppingListItem from "./shoppinglist/ShoppingListItem";

type DetailsScreenComponentProps = {
  shopAlias: string;
};

interface Item {
  name: string;
  quantity: string;
}

const ShoppingListComponent = ({ shopAlias }: DetailsScreenComponentProps) => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [newQuantity, setNewQuantity] = useState<string>("");

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
      const newItemObject: Item = {
        name: newItem,
        quantity: newQuantity,
      };
      setItems([...items, newItemObject]);
      setNewItem("");
      setNewQuantity("");
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const toggleConfirmationModal = () => {
    setConfirmationModalVisible(!confirmationModalVisible);
  };

  useEffect(() => {
    // Mentjük az adatokat az AsyncStorage-be, amikor a 'items' változik
    saveItems();
  }, [items]);

  const handleRemoveAllItems = () => {
    toggleConfirmationModal(); // Megnyitjuk a modal-t a megerősítési ablakhoz
  };
  const confirmRemoveAllItems = () => {
    // Töröljük az összes elemet
    setItems([]);
    // Bezárjuk a modal-t, miután a felhasználó megerősítette a törlést
    toggleConfirmationModal();
  };
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
        {/* HF2: mennyiséget is meg lehessen adni elemekhez, és  adott típusúból többet ne lehessen felvenni */}
        {/* HFX: törlés mindent, megerősítés popup vagy valami kelljen hozzá */}
        {/* HFX + 1: lakat iconnal lezárod egy itemet */}
        {/* HFX + 2: adott sort lehessen módosítani */}
        <TextInput
          style={styles.input}
          placeholder="Mennyiség"
          value={newQuantity}
          onChangeText={(text) => setNewQuantity(text)}
        />
        <Button title="Hozzáad" onPress={handleAddItem} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Button title="Teljes lista törlése" onPress={handleRemoveAllItems} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={confirmationModalVisible}
          onRequestClose={() => {
            toggleConfirmationModal(); // Bezárom a modal-t, ha a felhasználó elutasítja a megerősítést
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Biztosan törölni szeretnéd az összes elemet?</Text>
              <Button
                title="Igen"
                onPress={confirmRemoveAllItems} // Bezárjuk a modal-t, miután a felhasználó megerősítette a törlést
              />
              <Button title="Mégsem" onPress={toggleConfirmationModal} />
            </View>
          </View>
        </Modal>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <FlatList
          style={styles.listContainer}
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ShoppingListItem
              itemName={item.name}
              itemQuantity={item.quantity}
              onDelete={() => {
                handleRemoveItem(index);
              }}
            />
          )}
        />
      </View>
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
  listContainer: { marginTop: 12, marginBottom: 36 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2196f3",
    padding: 4,
    marginVertical: 8,
    textDecorationColor: "#2C6BED",
    width: "100%",
    Height: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
});

export default ShoppingListComponent;
