import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import PeopleScreen from './components/PeopleScreen/PeopleScreen';
import PlanetsScreen from './components/PlanetsScreen/PlanetsScreen';
import SpaceshipsScreen from './components/SpaceshipsScreen/SpaceshipsScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
        <Tab.Screen name="Planets" component={PlanetsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
