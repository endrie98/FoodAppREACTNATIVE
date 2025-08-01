import MealItem from "@/components/MealItem";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import { RootStackParamList } from "@/models/rootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen = (props: Props) => {
    const { route: { params: { categoryId } }, navigation } = props;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

    function renderMealItem(item: Meal) {
        return <MealItem item={item} />
    }

    const category = CATEGORIES.find((cat) => cat.id === categoryId);

    useLayoutEffect(() => {
        if (category !== null) {
            navigation.setOptions({
                title: category!.title
            });
        }
    }, [categoryId, navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => renderMealItem(itemData.item)} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
