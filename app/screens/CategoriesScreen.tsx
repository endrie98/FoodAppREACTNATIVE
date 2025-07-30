import { CATEGORIES } from "@/data/dummy-data"
import Category from "@/models/category"
import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"

function renterCategoryItem(item: Category) {
    return <CategoryGridTile title={item.title} color={item.color} />
}

const CategoriesScreen = () => {
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
