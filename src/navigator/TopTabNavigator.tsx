import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatsScreen } from '../screens/ChatsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['`new NativeEventEmitter()`'])

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

  const { top} = useSafeAreaInsets() 

  return (
    <Tab.Navigator 
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor:'white'
      }}  
      screenOptions={({ route }) => ({
        tabBarPressColor: '#cec6c6',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#444444'
        },
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ( { color, focused } ) => {

          let iconName: string = '';

          switch ( route.name ) {
            case 'Chat':
              iconName= "chatbubble-ellipses-outline"
              break;
            case 'Contacts':
              iconName= "people-outline"
            break;
            case 'Album':
              iconName= "folder-open-outline"
            break;     
          }
        
          return <Icon name={iconName} size={ 20 } color="#444444" />
        }
      })}
    >
      <Tab.Screen name="Chat" component={ ChatsScreen } />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}

