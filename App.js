import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from "react-native";

const App = () => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const [isValidPassword, setValidPassword] = useState(true);
  const { width } = useWindowDimensions();

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setPassword(val);
      setValidPassword(true);
    } else {
      setPassword(val);
      setValidPassword(false);
    }
  };

  const handleLogin = () => {
    if (regex.test(email)) {
      setValidEmail(true);
      alert(`Email: ${email}, Password: ${password}`);
    } else {
      setValidEmail(false);
      alert(`Enter valid email address`);
    }
  };

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.08 }]}>
      <View style={styles.headerCont}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <View style={styles.inputCont}>
        <View style={styles.inputFieldCont}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            autoCapitliaze="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Enter your Email"
            placeholderTextColor="#ffffff"
            value={email}
            onChangeText={(value) => setEmail(value)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            style={styles.inputField}
          />
          {isValidEmail ? null : (
            <Animated.View animation="fadeInLeft" duration={2000}>
              <Text style={styles.error}>Email address is invalid</Text>
            </Animated.View>
          )}
        </View>
        <View style={styles.inputFieldCont}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            autoCapitliaze="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Enter your Password"
            placeholderTextColor="#ffffff"
            value={password}
            onChangeText={(value) => handlePasswordChange(value)}
            style={styles.inputField}
          />
          {isValidPassword ? null : (
            <Animated.View animation="fadeInLeft" duration={500}>
              <Text style={styles.error}>
                Password must be 6 charcters long
              </Text>
            </Animated.View>
          )}
        </View>
        <TouchableOpacity style={styles.forgotPasswordBtn}>
          <Text style={styles.forgotPasswordBtnText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.text}>Don't have an Account ? </Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "steelblue",
  },
  header: {
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 26,
    color: "#ffffff",
  },
  headerCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  inputCont: {
    flex: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 10,
  },
  inputFieldCont: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginVertical: 15,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    color: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: 12,
    backgroundColor: "#0da2ff",
    opacity: 0.65,
  },
  forgotPasswordBtn: {
    alignSelf: "flex-end",
  },
  forgotPasswordBtnText: {
    color: "#ffffff",
  },
  loginBtn: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  loginBtnText: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "steelblue",
    fontWeight: "bold",
  },
  signupTextCont: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
