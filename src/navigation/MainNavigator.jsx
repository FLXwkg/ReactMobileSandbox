import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ProductsScreen from '../screens/ProductsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTabBar from './CustomTabBar'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <BottomTab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <BottomTab.Screen name='HomeStack' options={{ headerShown: false, title: 'Home' }} component={StackNavigator} />
      <BottomTab.Screen name='Products' component={ProductsScreen} />
    </BottomTab.Navigator>
  )
}
export default TabNavigator
