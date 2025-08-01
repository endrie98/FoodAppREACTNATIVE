import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import { RootStackParamList } from "@/models/rootStackParamList";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "MealsOverview">;

const CategoriesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  function renterCategoryItem(item: Category) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }

    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renterCategoryItem(itemData.item)}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
