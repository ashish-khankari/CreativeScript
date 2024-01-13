import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        backgroundColor:"#ededed"
    },
    input: {
        flex: 1,
        marginLeft: 10,
        
    },
    lockIcon: {
        height: 25,
        width: 25,
    },
    errorMessage:{
        color:"red",
        fontSize:12
    },
    parentContainer:{
        // backgroundColor:"blue",
        height:110
    }
});

export default styles;
