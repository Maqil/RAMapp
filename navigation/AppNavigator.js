import {createStackNavigator, createAppContainer} from 'react-navigation';
import IndexScreen from '../screens/IndexScreen';
import MapScreen from '../screens/MapScreen';

const MainNavigator = createStackNavigator({
  Index: IndexScreen,
  Map: MapScreen,
});

const App = createAppContainer(MainNavigator);

export default App