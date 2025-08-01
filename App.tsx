import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { RootDrawerParamList } from "./models/rootDrawerParamList";
import { RootStackParamList } from "./models/rootStackParamList";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    sceneStyle: { backgroundColor: "#24180f" },
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    drawerContentStyle: { backgroundColor: "#351401" },
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#cfae95ff"
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: "All Categories",
      drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
    }} />
    <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{
      drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
    }} />
  </Drawer.Navigator>
}

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
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
            headerShown: false
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
