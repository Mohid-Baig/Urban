import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import SVGImages from "../../assets/SVGs/index";
const DeleteModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <SVGImages.Icons.DeleteModalIcon />
          <Text style={styles.title}>Are you sure you want to delete?</Text>
          <Text>This action cannot be undone.</Text>
          <View style={styles.buttonContainer}>
            <View style={{ width: "48%" }}>
              <CustomButton text="Cancel" onPress={onClose} />
            </View>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#f4f5f8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "48%",
  },
  btnText: {
    fontFamily: "Montserrat_700Bold",
  },
});
