import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./Styles/DashboardScreenStyles"
import { arrowRight, people, profile, shield, userProfilePic } from "../../theme/images"
import AccountInfoBars from "../../components/atoms/AccountInfoBars"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AddItemsScreen from "./AddItemsScreen"
import CartScreen from "./CartSreen"
import DoneScreen from "./DoneScreen"
import ChatScreen from "./ChatScreen"

const Tab = createBottomTabNavigator()

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

            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="AddItemsScreen" component={AddItemsScreen} />
                <Tab.Screen name="CartScreen" component={CartScreen} />
                <Tab.Screen name="DoneScreen" component={DoneScreen} />
                <Tab.Screen name="ChatScreen" component={ChatScreen} />
            </Tab.Navigator>

        </View>
    )
}

export default DashboardScreen;