import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import HomeScreen from './screens/home';
import ListScreen from './screens/list';
import SettingsScreen from './screens/settings';

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(AppNavigator);
