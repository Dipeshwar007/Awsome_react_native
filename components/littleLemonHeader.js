import {StyleSheet, View,Text} from 'react-native';

export default function LittleLemonHeader(){
    return(
        <View style={headerStyle.headContainer}>
            <Text style={headerStyle.headText}>Little Lemon</Text>
        </View>
    )
};


const headerStyle = StyleSheet.create({
    headContainer:{
        flex:.15,
        backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText:{
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',    
    }
})