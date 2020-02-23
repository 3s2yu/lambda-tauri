import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { enableScreens } from 'react-native-screens';

import HomeScreen from './screens/home';
import SearchScreen from './screens/search';
import SettingsScreen from './screens/settings';

enableScreens();

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  Settings: { screen: SettingsScreen },
},{
  lazy: true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: '#fff',
    activeBackgroundColor: '#e91e63',
  },
});

export default createAppContainer(AppNavigator);
