import IconButton from "@/components/IconButton";
import List from "@/components/MealDetail/List";
import SubTitle from "@/components/MealDetail/SubTitle";
import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { RootStackParamList } from "@/models/rootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailsScreen = (props: Props) => {
    const { route: { params: { mealId } }, navigation } = props;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)!;

    function headerBtnPressHandler() {
        console.log("Pressed!")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton name="star" color="white" onPress={headerBtnPressHandler} />
        });
    }, [navigation, headerBtnPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                duration={selectedMeal.duration}
                style={undefined}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle subTitle="Ingredients" />
                    <List data={selectedMeal.ingredients} />
                    <SubTitle subTitle="Steps" />
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listContainer: {
        width: "80%"
    },
    listOuterContainer: {
        alignItems: "center"
    }
});
