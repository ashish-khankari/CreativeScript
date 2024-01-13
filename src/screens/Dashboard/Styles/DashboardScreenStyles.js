import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    userInfoContainer:{
        width:170,
        height:190,
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    imageContainer:{
        width:115,
        height:115,
        backgroundColor:"aliceblue",
        borderRadius:55,
        alignItems:"center",
        justifyContent:"center",
    },
    userProfilePicStyles:{
        width:105,
        height:105,
        
    },
    userInfo:{
        alignItems:"center",
        justifyContent:"center",
    },
    accountInfoContainer:{
        flex:2
    }
})

export default styles;