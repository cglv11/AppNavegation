import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                     <TouchableOpacity 
                        style={{
                            marginLeft: 10
                        }}
                        onPress={() => navigation.toggleDrawer()}
                     >
                        <Icon name="grid-outline" size={ 30 } color="#444444" />
                     </TouchableOpacity>
            )
        })

    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>

            <Button 
                title= "Ir pagina 2"
                onPress= { () => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                alignSelf: 'center',
            }}>
                Navegar con argumentos
            </Text>

            <View style={{ 
                flexDirection: 'row',
                justifyContent: 'center',
                }}>

                <TouchableOpacity style={{
                    ...styles.botonGrande,
                    backgroundColor: '#2779e5'
                }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    }) }
                >
                    <Icon name="male" size={ 30 } color="#444444" />
                    <Text style={ styles.botonGrandeTexto }> Pedro </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    ...styles.botonGrande,
                    backgroundColor: '#33dd6b'
                }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Susana'
                    }) }
                >
                    <Icon name="female" size={ 30 } color="#444444" />
                    <Text style={ styles.botonGrandeTexto }> Susana </Text>
                </TouchableOpacity>

            </View>



        </View>
    )
}
