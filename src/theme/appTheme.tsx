import { StyleSheet } from "react-native";

export const colores = {
    primary: "#444444",
    secondary: "#005dff"
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 30,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        alignSelf: 'center',
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    avatar: {
        width: 120,
        height: 120
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto:{
        fontSize: 25,
    }
});