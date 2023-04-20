import { Button, TextInput, View, Text, FlatList, Modal,
   TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './style'

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [isVisible, setVisible] = useState('false');
  const [eventSelected, setEventSelected] = useState('');

  const AddEvent = () => {
    if (text.length === 0)
      return

    //hace spread y agrega otro elemento en el momento.
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ])
    setText('');
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listContainer} onPress={()=>SelectedItem(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  )

  const SelectedItem = (id) =>{
    setEventSelected(events.find( event => event.id === id))
    setVisible(!isVisible);
  }

  const CancelModal= ()=> {
    setVisible(!isVisible);
  }

  const DeleteEvent = (id) =>{
    setEvents(events.filter( event => event.id !== eventSelected.id))
    setEventSelected('')
    setVisible(!isVisible);
  }
  console.warn('events', events)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Agregue un elemento'
          style={styles.input}
          value={text}
          onChangeText={(val) => setText(val)} />
        <Button title='Add' color={"#893168"}
          onPress={AddEvent}></Button>
      </View>
      <View >
        <FlatList
          renderItem={renderItem}
          data={events}
          keyExtractor={(item) => item.id} />
      </View>
      <Modal visible={isVisible}>
        <View>
          <Text>¿Desea eliminar el elemento {text.value}?</Text> 
          <View>     
          <Button title='Cancelar' onPress={()=>CancelModal()}/>
          <Button title='Eliminar' onPress={()=>DeleteEvent()}/>
          </View>     
        </View>
      </Modal>
    </View>
  );
}