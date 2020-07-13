import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

import SearchBar from './src/components/SearchBar';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,    
        ResultsShow: ResultsShowScreen
    },
    {
        initialRoutName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }

    }
);

export default createAppContainer(navigator); 