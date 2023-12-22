import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ShoppingListItemProps = {
  itemName: string;
  itemQuantity: string;
  onDelete: () => void;
  onEdit: () => void; // Új prop az elem szerkesztéséhez
  itemDetails?: string;
  locked: boolean;
};

const ShoppingListItem = ({
  itemName,
  itemQuantity,
  itemDetails,
  onDelete,
  onEdit,
  locked,
}: ShoppingListItemProps) => {
  const [localLocked, setLocalLocked] = useState<boolean>(locked);

  const handleRemoveItem = () => {
    if (!localLocked) {
      onDelete();
    } else {
      // Elem le van zárva, ne hajtsa végre a törlési műveletet
      alert("A lezárt elemet nem lehet törölni.");
    }
  };

  const STORAGE_KEY = `lockedStatus_${itemName}`;

  useEffect(() => {
    // Betöltjük a lakat állapotát az AsyncStorage-ból
    const loadLockedStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedStatus !== null) {
          setLocalLocked(JSON.parse(storedStatus));
        }
      } catch (error) {
        console.error("Hiba az adatok betöltésekor:", error);
      }
    };

    loadLockedStatus();
  }, [STORAGE_KEY]);

  const saveLockedStatus = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(localLocked));
    } catch (error) {
      console.error("Hiba az adatok mentésekor:", error);
    }
  };

  // A lakat állapotának frissítése után mentjük az új állapotot az AsyncStorage-be
  useEffect(() => {
    saveLockedStatus();
  }, [localLocked, STORAGE_KEY]);

  return (
    <View style={styles.listItem}>
      <View style={{ flex: 1 }}>
        <Text>{`${itemName} - ${itemQuantity}`}</Text>
      </View>
      <TouchableOpacity onPress={onEdit}>
        <View
          style={{ width: 48, alignItems: "center", justifyContent: "center" }}
        >
          <FontAwesome name="edit" size={32} color="blue" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLocalLocked((prev: boolean) => !prev);
        }}
      >
        <View
          style={{ width: 48, alignItems: "center", justifyContent: "center" }}
        >
          <FontAwesome
            name={localLocked ? "lock" : "unlock"}
            color={localLocked ? "red" : "green"}
            size={32}
          />
        </View>
      </TouchableOpacity>
      <Button title="Töröl" onPress={handleRemoveItem} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ShoppingListItem;
