import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: 25,
        width: "100%"
    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop:50
    },
    checkBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
    },
    checkBoxText:{
        marginLeft:10
    },
    inputFieldContainer:{
        marginTop:55
    },
    remeberOrForgotPasswordContainer: {
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-between",
        position:"relative",
        marginTop:20
    },
    socialIcoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"red"
    },
    socialIconStyles: {
        height: 50,
        width: 50,
        elevation: 5,
        margin: 24,
        marginTop: 30
    },
    orTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // marginTop:30
    },
    orText: {
        color: "#888",
        marginHorizontal: 10,
    },
    horizontalLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#888",
    },
    signUpTextContainer: {
        alignItems: "center",
        marginTop: 45,
    },
    signUpLink: {
        color: "#047CFF",
    },
    buttonContainer:{
        marginTop:110,
    }
});

export default styles;
