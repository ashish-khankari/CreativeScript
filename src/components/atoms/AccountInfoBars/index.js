import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";
import { arrowRight, profile } from "../../../theme/images";
const AccountInfoBars = ({leftIcon, title, rightIcon}) => {
    return (

        <View style={styles.container}>
            <Image source={leftIcon} style={styles.leftSideIcon} />
            <Text style={styles.title}>{title}</Text>
            <Image source={rightIcon} style={styles.rightSideIcon} />
        </View>
    )
}

export default AccountInfoBars;