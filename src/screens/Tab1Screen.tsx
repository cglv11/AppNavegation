import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();
    
    useEffect(() => {
        console.log('Tab1Screen')
    }, [])
    
    return (
        
        <View style={ {
            ...styles.globalMargin,
            marginTop: top
            }}>
            <Text style={styles.title}> Iconos </Text>

            <Text>
                <TouchableIcon iconName="airplane" />
                <TouchableIcon iconName="arrow-forward-circle" />
                <TouchableIcon iconName="bus" />
                <TouchableIcon iconName="image" />
                <TouchableIcon iconName="notifications" />
                <TouchableIcon iconName="mic" />
                <TouchableIcon iconName="today" />
                <TouchableIcon iconName="heart" />
                <TouchableIcon iconName="hand-left" />
                <TouchableIcon iconName="code-slash" />
                <TouchableIcon iconName="bug" />
                <TouchableIcon iconName="logo-amazon" />
                <TouchableIcon iconName="logo-apple" />
                <TouchableIcon iconName="logo-android" />
                <TouchableIcon iconName="logo-css3" />
                <TouchableIcon iconName="logo-facebook" />
                <TouchableIcon iconName="logo-electron" />
                <TouchableIcon iconName="logo-chrome" />
                <TouchableIcon iconName="logo-python" />
                <TouchableIcon iconName="logo-pinterest" />
                <TouchableIcon iconName="logo-playstation" />
                <TouchableIcon iconName="logo-tumblr" />
                <TouchableIcon iconName="logo-whatsapp" />
                <TouchableIcon iconName="logo-npm" />
                <TouchableIcon iconName="logo-instagram" />
                <TouchableIcon iconName="logo-xbox" />
                <TouchableIcon iconName="logo-vimeo" />
                <TouchableIcon iconName="logo-twitter" />
            </Text>

        </View>
    )
}
