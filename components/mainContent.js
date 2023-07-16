import { StyleSheet, View, Text } from "react-native";
import LemonMenu from "./LemonMenu";

export default function MainContent() {
    return(
        <View style={styleMain.mainContainer}>
            <Text style={styleMain.mainHeading}>
                Welcome to Little Lemon
            </Text>
            <Text style={styleMain.mainSubHeading}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            <LemonMenu />
        </View>
    )
}
const styleMain = StyleSheet.create({
    mainContainer:{
        flex:.8,
        // justifyContent:'center',
        alignItems:'center',
    },
    mainHeading:{
        fontSize:19,
        color:'#fff',
        padding:10,
    },
    mainSubHeading:{
        padding:10,
        fontSize:16,
        color:'#fff',
        textAlign:'center',
    }
})