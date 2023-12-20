import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type ShoppingListItemProps = {
  itemName: string;
  itemQuantity: "string";
  onDelete: () => void;
  itemDetails?: string;
};

const ShoppingListItem = ({
  itemName,
  itemQuantity,
  itemDetails,
  onDelete,
}: ShoppingListItemProps) => {
  const [locked, setLocked] = useState<boolean>(false);

  const handleRemoveItem = () => {
    onDelete();
  };

  return (
    <View style={styles.listItem}>
      <View style={{ flex: 1 }}>
        <Text>{`${itemName} - ${itemQuantity}`}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setLocked((prev) => !prev);
        }}
      >
        <View
          style={{ width: 48, alignItems: "center", justifyContent: "center" }}
        >
          <FontAwesome
            name={locked ? "lock" : "unlock"}
            color={locked ? "red" : "green"}
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
