import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PeopleScreen from 'components/screens/PeopleScreen';
import PlanetsScreen from 'components/screens/PlanetsScreen';
import StarshipsScreen from 'components/screens/StarshipsScreen';

export const AppNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="People"
          component={PeopleScreen}
          options={{
            tabBarTestID: 'PeopleTab',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Starships"
          component={StarshipsScreen}
          options={{
            tabBarTestID: 'StarshipsTab',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'rocket' : 'rocket-outline'}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Planets"
          component={PlanetsScreen}
          options={{
            tabBarTestID: 'PlanetsTab',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'planet' : 'planet-outline'}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
