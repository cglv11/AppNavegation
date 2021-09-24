import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity  } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tab';
import Icon from 'react-native-vector-icons/Ionicons';
// import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }} 
    drawerContent= { (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

interface Props extends DrawerContentComponentProps{};

const MenuInterno = ( { navigation }: Props) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: 'https://psicologosgop.es/wp-content/uploads/2015/10/user2.png'}}
        style={styles.avatar}
      />
      </View>

      {/* Manú */}
      <View style={ styles.menuContainer} >

        <TouchableOpacity
         style={{
           ...styles.menuBoton,
            flexDirection: 'row'
          }}
         onPress={ () => navigation.navigate("Tabs")}
         >
          <Icon name="compass-outline" size={ 30 } color="#444444" />
          <Text style={ styles.menuTexto}>  Navegacion </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={ {
          ...styles.menuBoton,
           flexDirection: 'row'
         }}
         onPress={ () =>  navigation.navigate("SettingsScreen")}
         >
          <Icon name="settings-outline" size={ 30 } color="#444444" />
          <Text style={ styles.menuTexto}>  Ajustes </Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  );
}