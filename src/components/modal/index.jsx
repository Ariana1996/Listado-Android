import React from "react";
import { Modal, View, Text, Button } from 'react-native';

const ModalContainer = ({isVisible,value, onPressCancelButton, onPressDeleteButton}) => {

    return (
        <Modal visible={isVisible}>
            <View>
                <Text>¿Desea eliminar el elemento {value}?</Text>
                <View>
                    <Button title='Cancelar' onPress={onPressCancelButton} />
                    <Button title='Eliminar' onPress={onPressDeleteButton} />
                </View>
            </View>
        </Modal>
    )
}

export default ModalContainer;
