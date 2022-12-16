import {StyleSheet } from "react-native";
import colors from "../../Themes/theme";


export const styles = StyleSheet.create({
    textButton: {
        color: colors.sixnary,
        fontWeight: 'bold',
        fontSize: 18,
    },
    title:{
        color: colors.sixnary,
        fontWeight: 'bold',
        fontSize: 12,
        marginTop:5,
    },
    price:{
        color: colors.sixnary,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:5,
    },
    container:{    
        flexDirection: "row",
        height:'100%',
        width:'100%',
    },
    card:{
        backgroundColor: colors.quaternary,
        paddingVertical:4,
        paddingHorizontal:10,
        paddingBottom:10,
        marginVertical:10,
        marginHorizontal:17,
        borderRadius:15,
        alignItems:"center",    
        borderWidth: 2,     
        borderColor: colors.secondary,
        width:175,
        height:175
    },
    imgCard:{
        marginBottom: 5,
        width:100,
        height:100
    },

})
