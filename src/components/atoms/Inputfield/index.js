import React from "react";
import { View, Image, TextInput, Text } from "react-native";
import styles from "./Styles/index";
import { lock } from "../../../theme/images";

const InputField = ({ title, icon, value, onChangeText, error }) => {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.inputContainer}>
                <Image source={icon} style={styles.lockIcon} />
                <TextInput placeholder={title} style={styles.input} value={value} onChangeText={onChangeText} />
            </View>
                {error ? (
                    <Text style={styles.errorMessage}>{error}</Text>
                ) : null}
        </View>
    );
};

export default InputField;
