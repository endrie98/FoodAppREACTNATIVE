import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { RootStackParamList } from "./models/rootStackParamList";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "#24180f" },
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: "All Categories",
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const catName = CATEGORIES.find((cat) => cat.id === catId)!.title;
            //   return {
            //     title: catName
            //   }
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
