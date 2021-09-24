import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigators/StackNavigator';
// import { MenuLateralBasico } from './src/navigators/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tab';

const App = () => {
  return (
    < NavigationContainer>
      <AppState>
        {/* < StackNavigator /> */}
        < MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )

}

export default App