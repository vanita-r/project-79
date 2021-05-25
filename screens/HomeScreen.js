import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';

export default class HomeScreen extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allRequests}
                    renderItem={this.renderItem}
                />
                {/*renderItem = ( {item, i} ) =>{
                        console.log(item.item_name);
                        return(
                            <ListItem
                                key={i}
                                title={item.item_name}
                                subtitle={item.description}
                                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                                rightElement={
                                    <TouchableOpacity style={StyleSheet.button}>
                                        <Text style={{color:'#ffff'}}>Exchange</Text>
                                    </TouchableOpacity>
                                }
                            />
                        )
                }*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
})