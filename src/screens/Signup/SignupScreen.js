import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles/SignUpScreenStyle";
import { emailIcon, lock, loginHeader, user, userIcon } from "../../theme/images";
import AuthHeader from "../../components/atoms/AuthHeader";
import InputField from "../../components/atoms/Inputfield";
import CheckBox from "@react-native-community/checkbox"
import Buttons from "../../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../Store/SignUpSlice";

const SignUpScreen = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const dispatch = useDispatch()
    const [userName, setUser] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState(null);
    const [userError, setUserError] = React.useState(null);
    const [passwordError, setPasswordError] = React.useState(null);

    const validateInputs = () => {
        let isValid = true;

        if(userName === ''){
            setUserError("UserName is required");
            isValid = false
        }else{
            setUserError(null)
        }
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
    const {loading, user, error} = useSelector(state => state.signUp);

    const handleButton = async () => {
        if (!validateInputs()) {
            return;
        }
    
        if (user === null) {
            alert("You are already a user.");
            navigation.navigate("LogIn");
        }else{
            alert("SuccesFully Signed In")
            navigation.navigate("LogIn");
        }
        try {
            const signupData = {
                name: userName, 
                email: email,
                password: password,
            };
    
            // console.log(signupData)
            await dispatch(signUpUser(signupData));
            
        } catch (error) {
            console.error("Signup failed:", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <AuthHeader title={"Create an account"} headerImage={loginHeader} />
            </View>

            <View style={styles.inputFieldContainer}>
                <InputField
                    title={"catherine shaw"}
                    icon={userIcon}
                    value={userName}
                    onChangeText={(userName) => setUser(userName)}
                    error={userError}
                />
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
                    <Text style={styles.checkBoxText}>I agree with terms & conditions</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                    <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                    <Text style={styles.checkBoxText}>Allow Notifications</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Buttons handlePress={handleButton} />
            </View>
        </View>
    );
};

export default SignUpScreen;
