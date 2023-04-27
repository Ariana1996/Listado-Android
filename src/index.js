import { View } from 'react-native';
import { useState } from 'react';
import { styles } from './style';
import { Input, ListContainer, ModalContainer } from './components/index';

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

  const SelectedItem = (id) => {
    setEventSelected(events.find(event => event.id === id))
    setVisible(!isVisible);
  }

  const CancelModal = () => {
    setVisible(!isVisible);
  }

  const DeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== eventSelected.id))
    setEventSelected('')
    setVisible(!isVisible);
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Agregue un elemento"
        value={text}
        onChangeText={(val) => setText(val)}
        buttonTitle="Add"
        buttonColor="#893168"
        onPressButton={AddEvent} />

      <ListContainer
        items={events}
        onPressTouchable={SelectedItem} />

      <ModalContainer 
      value={eventSelected.value} 
      isVisible={isVisible} 
      onPressCancelButton={CancelModal} 
      onPressDeleteButton={DeleteEvent} />
    </View>
  );
}