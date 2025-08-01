import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ onPress, name, color } : { onPress: () => void; name: keyof typeof Ionicons.glyphMap; color: string; }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <Ionicons name={name} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});
