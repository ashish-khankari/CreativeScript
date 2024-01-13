import React from "react";
import { View, Image, Text } from "react-native";
import { loginHeader } from "../../../../theme/images";
import styles from "./Styles";

const AuthHeader = ({headerImage, title})=>{
    return(
        <View style={styles.container}>
            <Image source={headerImage} style={styles.headerImage} />
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

export default AuthHeader;