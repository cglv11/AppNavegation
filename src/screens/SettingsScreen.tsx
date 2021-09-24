import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../theme/appTheme';

export const SettingsScreen = () => {
    
    const insets = useSafeAreaInsets();

    const { authState } = useContext( AuthContext )

    return (
        <View style={{ marginTop: insets.top + 20 }}>
            <Text style={{
                ...styles.globalMargin,
                justifyContent: 'center',
                fontSize: 30,
                alignSelf: 'center',
            }}> SettingsScreen </Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>
            {
                    authState.isLoggedIn && (
                        <Icon 
                        name={ authState.favoriteIcon! } // error name type undefined or string thats why i put !
                        size={80} 
                        color={ colores.primary } 
                    />)
            }
        </View>
    )
}
