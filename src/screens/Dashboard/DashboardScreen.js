import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./Styles/DashboardScreenStyles"
import { arrowRight, people, profile, shield, userProfilePic } from "../../theme/images"
import AccountInfoBars from "../../components/atoms/AccountInfoBars"
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// const Tab = createBottomTabNavigator()

// const DummyScreen = ({ name }) => (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>{name}</Text>
//     </View>
// );

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.userProfilePicStyles} source={userProfilePic} />
                </View>

                <View style={styles.userInfo}>
                    <Text>Miriam de Jesús</Text>
                    <Text>h.mariano@gmail.com</Text>
                </View>
            </View>
            <View style={styles.accountInfoContainer}>
                <AccountInfoBars leftIcon={profile} title={"Account Information"} rightIcon={arrowRight} />
                <AccountInfoBars leftIcon={shield} title={"Google Business Profile"} rightIcon={arrowRight} />
                <AccountInfoBars leftIcon={people} title={"Team members"} rightIcon={arrowRight} />
            </View>
        </View>
    )
}

export default DashboardScreen;