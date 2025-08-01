import Meal from "@/models/meal";
import { RootStackParamList } from "@/models/rootStackParamList";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({ item }: { item: Meal }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    function selectMealHandler() {
        navigation.navigate("MealDetail", {
            mealId: item.id
        });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => pressed && styles.buttonPressed}
                onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <MealDetails 
                        affordability={item.affordability} 
                        complexity={item.complexity} 
                        duration={item.duration} 
                        style={undefined}
                        textStyle={undefined}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    }
});
