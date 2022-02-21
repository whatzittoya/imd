import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import SearchBar from "../components/SearchBar";
import Icon from "react-native-vector-icons/FontAwesome5";
export default () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [checkedB, setCheckedB] = React.useState(false);
  const [checkedC, setCheckedC] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const [checked, setChecked] = useState("first");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [hidePass, setHidePass] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc,
    });

    if (query.length) {
      url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(`mailto:whosendall@gmail.com}`);

    if (!canOpen) {
      throw new Error("Provided URL can not be handled");
    }

    return Linking.openURL(url);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Text,Password,Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Text"
        placeholderTextColor="black"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.contPassword}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={hidePass ? true : false}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon
          name={hidePass ? "eye-slash" : "eye"}
          size={15}
          color="grey"
          onPress={() => setHidePass(!hidePass)}
          style={styles.iconPassword}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Number"
        placeholderTextColor="black"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.title}>Dropdown</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <Text style={styles.title}>DatetimePicker</Text>
      <Text>{date.toString()}</Text>
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <Text style={styles.title}>Radio Button</Text>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignContent: "center" }}
          onPress={() => setChecked("first")}
        >
          <View style={{ flex: 1 }}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
          </View>
          <View style={{ flex: 4, alignSelf: "center" }}>
            <Text>First</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignContent: "center" }}
          onPress={() => setChecked("second")}
        >
          <View style={{ flex: 1 }}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
          </View>
          <View style={{ flex: 4, alignSelf: "center" }}>
            <Text>Second</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>CheckBox</Text>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignContent: "center" }}
          onPress={() => setCheckedB(!checkedB)}
        >
          <View style={{ flex: 1 }}>
            <Checkbox
              status={checkedB ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedB(!checkedB);
              }}
            />
          </View>
          <View style={{ flex: 4, alignSelf: "center" }}>
            <Text>Check1</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignContent: "center" }}
          onPress={() => setCheckedC(!checkedC)}
        >
          <View style={{ flex: 1 }}>
            <Checkbox
              status={checkedC ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedC(!checkedC);
              }}
            />
          </View>
          <View style={{ flex: 4, alignSelf: "center" }}>
            <Text>Check2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Photo</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://t3.ftcdn.net/jpg/02/50/12/70/360_F_250127043_8rncYCl0DJNGwRq9IVL9WrEh7OKKWuXV.jpg",
        }}
      />
      <Text style={styles.title}>Search Field</Text>
      <SearchBar></SearchBar>
      <Text style={styles.title}>Button</Text>
      <Button title="Submit"></Button>
      <Text style={styles.title}>PopUp</Text>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>Push Notification</Text>
      <View style={styles.contNotif}>
        <Button
          color="#00D331"
          title="Send WA"
          onPress={() => {
            Linking.openURL("whatsapp://send?text=hello&phone=+6285265287887");
          }}
        ></Button>
        <Button
          color="#6B77E3"
          title="Call"
          onPress={() => {
            Linking.openURL(`tel:+6285265287887`);
          }}
        ></Button>
        <Button
          color="#00AEF4"
          title="Email"
          onPress={() => {
            Linking.openURL(
              `mailto:whosendall@gmail.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/}`
            );
          }}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 30, fontWeight: "bold", paddingBottom: 20 },
  container: {
    flex: 1,
    paddingBottom: 30,
    padding: 8,
  },
  picker: {
    borderRadius: 15,
    borderWidth: 1,

    backgroundColor: "#FFF",
  },
  image: {
    marginHorizontal: 5,
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    marginHorizontal: 5,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#FFF",
  },
  inputPassword: {
    flex: 2,
  },
  iconPassword: {
    alignSelf: "center",
  },
  contPassword: {
    borderRadius: 15,
    borderWidth: 1,
    marginHorizontal: 5,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  contNotif: {
    flexDirection: "row",
    padding: 20,
  },
  buttonWa: {
    //color whatsapp
    backgroundColor: "#F194FF",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
});
