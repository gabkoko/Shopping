import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export type Item = {
    name: string;
    quantity: string;
    locked: boolean;
};

type ShoppingListItemProps = {
    item: Item;
    onDelete: () => void;
    onEdit: () => void; // Új prop az elem szerkesztéséhez
    onLock: (lockedItem: Item) => void;
};

const ShoppingListItem = ({
    item,
    onDelete,
    onEdit,
    onLock,
}: ShoppingListItemProps) => {
    const handleRemoveItem = () => {
        if (!item.locked) {
            onDelete();
        } else {
            // Elem le van zárva, ne hajtsa végre a törlési műveletet
            alert("A lezárt elemet nem lehet törölni.");
        }
    };

    return (
        <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <Text>{`${item.name} - ${item.quantity}`}</Text>
            </View>
            <TouchableOpacity onPress={onEdit}>
                <View
                    style={{
                        width: 48,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <FontAwesome name="edit" size={32} color="blue" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    onLock(item);
                }}
            >
                <View
                    style={{
                        width: 48,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <FontAwesome
                        name={item.locked ? "lock" : "unlock"}
                        color={item.locked ? "red" : "green"}
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
