import React from "react";
import { View, Text, TextInput } from "react-native";

const RegistrationScreen = () => {
  return (
    <View>
      <Text
        style={{
          position: "absolute",
          height: 35,
          left: 105,
          top: 0,

          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: 30,
          lineHeight: 35,
          textAlign: "center",
          letterSpacing: 0.01,

          color: "#212121",
        }}
      >
        Реєстрація
      </Text>
      <TextInput
        style={{
          position: "absolute",
          height: 50,
          left: 16,
          right: 16,
          top: 16,
        }}
      >
        Логін
      </TextInput>
    </View>
  );
};

export default RegistrationScreen;
