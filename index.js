/**
 * @format
 */

import {PlatformColor} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
              options: {
                topBar: {
                  title: {
                    // color: PlatformColor('?attr/colorOnBackground'),
                    text: 'Title',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
