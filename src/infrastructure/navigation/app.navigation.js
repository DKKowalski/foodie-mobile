import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapScreen from "../../features/map/screens/MapScreen";
import SettingsScreen from "../../features/settings/screens/SettingsScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import RestaurantsNavigator from "./restaurants.navigator";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};
function AppNavigation() {
  return (
    
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Restaurants"
          options={{
            tabBarLabelStyle: {
              width: "100%",
            },
          }}
          component={RestaurantsNavigator}
        />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabelStyle: {
              width: "100%",
            },
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
  
  );
}

export default AppNavigation;
