import { StyleSheet,View,Text } from "react-native";

export default function LittleLemonFooter(){
    return(
        <View style={styleFooter.footerContainer}>
            <Text style={styleFooter.footerText}>
                All Rights © Reserved By Little Lemon, 2023
            </Text>
        </View>
    )
}

const styleFooter = new StyleSheet.create({
    footerContainer:{
        flex:.05,
        backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText:{
        fontSize: 12,
    }
})