import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid =() => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{ 
        backgroundColor: 'white'
      }}
      screenOptions={( {route} ) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ( { color, focused } ) => {

          let iconName: string = '';

          switch ( route.name ) {
            case 'Tab1Screen':
              iconName= 'nutrition'
              break;
            case 'Tab2Screen':
              iconName= 'library'
            break;
            case 'StackNavigator':
              iconName= 'layers'
            break;     
          }
        
          return <Icon name={iconName} size={ 24 } color="#444444" />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Icons'}} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Drawer'}} component={ TopTapNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={( {route} ) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ( { color, focused } ) => {

          let iconName: string = '';

          switch ( route.name ) {
            case 'Tab1Screen':
              iconName= 'T1'
              break;
            case 'Tab2Screen':
              iconName= 'T2'
            break;
            case 'StackNavigator':
              iconName= 'ST'
            break;     
          }
        
          return <Icon name={iconName} size={ 20 } color="#444444" />
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTapNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}






