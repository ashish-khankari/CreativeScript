import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import styles from "./Styles/LoginScreenStyle";
import { appleIcon, emailIcon, facebookIcon, googleIcon, lock, loginHeader } from "../../theme/images";
import AuthHeader from "../../components/atoms/AuthHeader";
import InputField from "../../components/atoms/Inputfield";
import CheckBox from "@react-native-community/checkbox"
import Buttons from "../../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/UserSlice";
// import { LoginRequest } from "../../redux/Action/AuthenticationAction";

const LoginScreen = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);
    const [userData, setUserData] = React.useState("")

    const {loading, user, error} = useSelector(state => state.signUp);

    console.log(user)
    const dispatch = useDispatch()

    const data = {
        email: email,
        password: password
    }

    useEffect(() => {
        dispatch(loginUser(data)).then((result) => {
            if (result.payload) {
                setEmail("")
                setPassword("")
            }
        })
    }, [])

    const validateInputs = () => {
        let isValid = true;

        if (email === "") {
            setEmailError("Email is required");
            isValid = false;
        } else {
            setEmailError(null);
        }
        if (password === "" || password.trim().length < 6) {
            setPasswordError("Password is required");
            isValid = false;
        } else {
            setPasswordError(null);
        }
        return isValid;
    };

    const handleButton = () => {
        if (!validateInputs()) {
            return;
        }

        console.log("user", user)
        navigation.navigate("Dashboard");
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <AuthHeader title={"Sign In"} headerImage={loginHeader} />
            </View>

            <View style={styles.inputFieldContainer}>
                <InputField
                    title={"catherine.shaw@gmail.com"}
                    icon={emailIcon}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    error={emailError}
                />
                <InputField
                    title={"catherine13"}
                    icon={lock}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                    error={passwordError}
                />
            </View>

            <View style={styles.remeberOrForgotPasswordContainer}>
                <View style={styles.checkBoxContainer}>
                    <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                    <Text>Remember Me</Text>
                </View>

                <Text>Forgot Password?</Text>
            </View>

            <View style={styles.socialIcoContainer}>
                <Image source={facebookIcon} style={styles.socialIconStyles} />
                <Image source={appleIcon} style={styles.socialIconStyles} />
                <Image source={googleIcon} style={styles.socialIconStyles} />
            </View>

            <View style={styles.orTextContainer}>
                <View style={styles.horizontalLine}></View>
                <Text style={styles.orText}>Or</Text>
                <View style={styles.horizontalLine}></View>
            </View>

            <View style={styles.signUpTextContainer}>
                <Text>
                    Don't have an account?{" "}
                    <Text style={styles.signUpLink}>Sign Up</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Buttons handlePress={handleButton} />
            </View>
        </View>
    );
};

export default LoginScreen;
