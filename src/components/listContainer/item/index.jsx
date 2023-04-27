import React from "react";
import { TouchableOpacity,Text} from 'react-native';
import { styles } from './style';


const ItemList = ({item, onPressItem}) =>{

    return (
            <TouchableOpacity style={styles.listContainer} 
            onPress={() =>onPressItem(item.id)}>
              <Text style={styles.item}>{item.value}</Text>
            </TouchableOpacity>
    )
};

export default ItemList;