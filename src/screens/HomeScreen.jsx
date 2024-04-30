import { Button, Text, View } from 'react-native'
import { styles } from '../styles/screens/HomeScreen'

function HomeScreen ({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button title='Go to profile' onPress={handlePress} />
    </View>
  )
}

export default HomeScreen
