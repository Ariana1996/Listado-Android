StatusBar es la barra de menú de arriba de todo.

En la documentación de reactnative etiquetas con puntos verdes es para android etiquetas con puntos negros para ios.

No existen rem ni px, son unidades, es dinámico dependiendo del dispositivo.

paleta
https://coolors.co/eaeaea-893168-4a1942-2e1c2b-050404

//hace spread y agrega otro elemento en el momento.
setEvents([
  ...events,
  {
    id: Math.random().toString(),
    value: text
  }
])
  }

utiliza el estado previo, cuando tenes alteraciones de estados a la vez
setEvents((prevEvent)=>[
  ...prevEvent,
  {
    id: Math.random().toString(),
    value: text
  }
])
  }

virtual dom vs shadows dom vs dom 
https://www.testim.io/blog/shadow-dom-vs-virtual-dom/
shadow: copia de dom
virtual dom: renderiza solo los elementos modificados, para no modificar todo
en android no existe el dom, solo existe la pestaña actual

map no tiene scroll, se renderiza constantemente la lista

FlatList - renderItem recibe cada elemento, recorre la lista, retorna cada elemento

     renderItem={renderItem}
        data={events}

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
    </View>
  )

  es lo mismo que 

    const renderItem = ({ item }) => {
    return (<View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
    </View>)
  }


  Modal animationType -> modo en que aparece la ventana
  el modal en sí no tiene estilos, si no el contenedor interno

modificación de inicio de programa: 
dentro del programa index
import { registerRootComponent } from "expo";
import App from "./src/index";
registerRootComponent(App);

  remover linea main de package.json

patrón modular para orden de carpetas.