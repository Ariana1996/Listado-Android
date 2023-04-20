import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
  inputContainer: {
    marginTop: 55,
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#2E1C2B",
    marginRight: 10,
    color: "#050404"
  },
  listContainer: {
    borderColor: "#2E1C2B",
    borderWidth:1,
    marginTop:15,
    textAlign:"center"
  }
});