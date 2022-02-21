//import stylesheet from react
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    marginVertical: 2,
  },
  button: {
    marginVertical: 2,
    margin: 10,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    marginVertical: 2,
    alignSelf: "flex-start",
    padding: 10,
    fontWeight: "bold",
  },
  inputWithIcon: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  ContainerInputIcon: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  picker: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#E5E5E5",
    borderColor: "#DCDCDC",
  },

  content: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  list: {
    backgroundColor: "#F6F6F6",
    marginBottom: 5,
    borderRadius: 5,
  },
  contentSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
    alignSelf: "center",
    marginRight: 20,

    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
  },
});

export default styles;
