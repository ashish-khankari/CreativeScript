import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

const Buttons = ({handlePress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
