import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegisterProduct } from "../Screen/RegisterProduct";
import { Login } from "../Screen/Login";
import { Home } from "../Screen/Home";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#121212",
        },
        tabBarInactiveTintColor: "#FFCF00",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sign-in" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterProduct"
        component={RegisterProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterProduct"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
