import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab2Screen')
    }, [])

    return (
        <View>
            <Text> Tab1Screen </Text>
        </View>
    )
}
